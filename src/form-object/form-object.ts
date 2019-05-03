import { Subject, Observable, of as observableOf, ReplaySubject, throwError } from 'rxjs';
import { flatMap, catchError, take } from 'rxjs/operators';
import { ValidatorFn, Validators } from '@angular/forms';
import { MetadataProperty } from 'enums/metadata-property.enum';
import { ModelMetadata } from 'types/model-metadata.type';
import { capitalize } from '../helpers/helpers';
import { FormObjectOptions } from '../interfaces/form-object-options.interface';
import { FormGroupOptions } from '../interfaces/form-group-options.interface';
import { FormModel } from '../interfaces/form-model.interface';
import { FormStore } from '../form-store/form-store';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';
import { FormError } from './../interfaces/form-error.interface';

// TODO better default values
const defaultModelOptions: FormObjectOptions = {
  getConfig: null, // (model: FormModel) => model.config, // TODO see if getConfig can be removed
  getModelType: (model: FormModel) => model.constructor.name
};

export class FormObject {
  protected serviceMappings: object;

  public _options: FormObjectOptions;
  public validators: object = {};
  public formGroupOptions: FormGroupOptions = {};
  public formStoreClass: any;

  protected beforeSave(store: FormStore): Observable<FormStore> {
    return observableOf(store);
  }

  protected afterSave(model?: FormModel, form?: FormStore): Observable<FormModel> {
    return observableOf(model);
  }

  constructor(
    public model: FormModel,
    protected options: FormObjectOptions
  ) {
    this._options = {
      ...defaultModelOptions,
      ...options
    };
  }

  get attributeProperties(): Array<string | symbol> {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, this.model.constructor) || {};
    return modelMetadata.attributeProperties || [];
  }

  get hasManyProperties(): Array<string | symbol> {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, this.model.constructor) || {};
    return modelMetadata.hasManyProperties || [];
  }

  get belongsToProperties(): Array<string | symbol> {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, this.model.constructor) || {};
    return modelMetadata.belongsToProperties || [];
  }

  getModelType(model: FormModel): string {
    if (this._options.getConfig) {
      // TODO see if can be removed
      return this._options.getConfig(this.model.constructor).type;
    }

    return this._options.getModelType(model);
  }

  getValidators(attributeName: string): ValidatorFn | Array<ValidatorFn> {
    const validators = this.validators[attributeName];

    if (validators && validators.length > 1) {
      return Validators.compose(validators);
    } else {
      return validators;
    }
  }

  reset(form) {
    this.rollbackAttributes(form);
    this.rollbackBelongsToRelationships(form);
    this.rollbackHasManyRelationships(form);
  }

  mapPropertiesToModel(form) {
    this.attributeProperties.forEach((propertyName: string | symbol) => {
      const formProperty = form.controls[propertyName];

      if (formProperty.isChanged) {
        const unmaskFunction: Function = this[`unmask${capitalize(propertyName.toString())}`];

        const propertyValue: any = unmaskFunction
          ? unmaskFunction.call(this, formProperty.value, form)
          : formProperty.value;

        this.model[propertyName] = propertyValue;
      }
    });
  }

  mapBelongsToPropertiesToModel(form) {
    this.belongsToProperties.forEach((propertyName) => {
      const formProperty = form.controls[propertyName];

      if (formProperty.isChanged) {
        if (formProperty.formObject && formProperty.model && formProperty.model.id) {
          this.model[propertyName] = formProperty.model;
        } else {
          this.model[propertyName] = formProperty.value;
        }
      }
    });
  }

  isFormValid(form: FormStore): boolean {
    return form.valid || form.disabled;
  }

  public save(form: FormStore): Observable<FormModel> {
    return observableOf(true).pipe(
      flatMap(() => this._beforeSave(form)),
      flatMap((validFormStore: FormStore) => {
        const validatedFormWithModel = new ReplaySubject();

        this._save(validFormStore)
          .pipe(
            catchError((error) => {
              validatedFormWithModel.error(error);
              return throwError(error);
            })
          )
          .subscribe((savedModel: FormModel) => {
            validatedFormWithModel.next({
              savedModel,
              validFormStore
            });
          });

        return validatedFormWithModel;
      }),
      flatMap(({savedModel, validFormStore}) => this._afterSave(savedModel, validFormStore)),
      take(1),
      catchError((error) => throwError(error))
    );
  }

  protected rollbackAttributes(form) {
    this.attributeProperties.forEach((propertyName: string | symbol) => {
      const formProperty = form.controls[propertyName];
      const unmaskFunction: Function = this[`mask${capitalize(propertyName.toString())}`];

      const propertyValue: any = unmaskFunction
        ? unmaskFunction.call(this, this.model[propertyName])
        : this.model[propertyName];

      if (formProperty.isChanged) {
        formProperty.setValue(propertyValue);
      }
    });
  }

  protected rollbackBelongsToRelationships(form) {
    this.belongsToProperties.forEach((propertyName) => {
      const formProperty = form.controls[propertyName];

      if (formProperty.isChanged) {
        form.controls[propertyName].setValue(this.model[propertyName]);
      }
    });
  }

  protected rollbackHasManyRelationships(form) {
    this.hasManyProperties.forEach((propertyName) => {
      const formProperty = form.controls[propertyName];

      const rollback: Function = this[`rollback${capitalize(propertyName.toString())}`];

      if (rollback) {
        rollback.call(this, propertyName, formProperty, form);
      }
    });
  }

  private _beforeSave(form: FormStore): Observable<FormStore> {
    const form$: Observable<FormStore> = this.beforeSave(form).pipe(
      flatMap((transformedForm: FormStore) => {
        this.mapPropertiesToModel(transformedForm);
        this.mapBelongsToPropertiesToModel(transformedForm);

        if (!this.isFormValid(transformedForm)) {
          return throwError({ valid: false, message: 'Form is not valid. Save aborted.' } as FormError);
        }

        return observableOf(transformedForm);
      })
    );

    return form$;
  }

  private _save(form: FormStore): Observable<FormModel> {
    const model$: Subject<FormModel> = new Subject<FormModel>();

    const modelType: string = this.getModelType(this.model);
    const service = this.serviceMappings[modelType];

    if (!service) {
      console.error(`
        Service for ${modelType} is not found in service mappings.
        Specify a service for ${modelType} model in ${this.constructor.name}
      `);
    }

    // TODO is there a better way to achieve this
    // issue: if .save() returns BehaviourSubject (which return a value immedietely)
    // .next will be called before "return model$"
    setTimeout(() => {
      service.save(this.model).subscribe((model: FormModel) => {
        model$.next(model);
      }, (error: any) => {
        model$.error(error);
      });
    });

    return model$;
  }

  private _afterSave(model: FormModel, form: FormStore): Observable<FormModel> {
    const form$: Observable<FormModel> = this.afterSave(model, form).pipe(
      flatMap((transformedModel: FormModel) => {
        this.mapModelPropertiesToForm(transformedModel, form);
        this.resetBelongsToFormControls(transformedModel, form);
        return observableOf(transformedModel);
      })
    );

    return form$;
  }

  private mapModelPropertiesToForm(
    model: FormModel,
    form: FormStore
  ): void {
    this.attributeProperties.forEach((propertyName: string) => {
      const formControl: ExtendedFormControl = form.controls[propertyName] as ExtendedFormControl;

      const maskFunction: Function = this[`mask${capitalize(propertyName)}`];
      const newInitialValue: any = model[propertyName];
      const maskedInitialValue: any = maskFunction ? maskFunction(newInitialValue) : newInitialValue;

      formControl.initialValue = maskedInitialValue;
      formControl.patchValue(maskedInitialValue);
    });
  }

  private resetBelongsToFormControls(model: FormModel, form: FormStore): void {
    this.belongsToProperties.forEach((propertyName: string) => {
      const formControl: ExtendedFormControl = form.controls[propertyName] as ExtendedFormControl;
      if (formControl.resetValue) {
        formControl.resetValue();
      }
    });
  }
}
