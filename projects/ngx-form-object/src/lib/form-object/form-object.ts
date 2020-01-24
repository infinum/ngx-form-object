import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable, of as observableOf, ReplaySubject, Subject, throwError } from 'rxjs';
import { catchError, flatMap, map, take } from 'rxjs/operators';
import { MetadataProperty } from '../enums/metadata-property.enum';
import { ExtendedFormArray } from '../extended-form-array/extended-form-array';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';
import { FormStore } from '../form-store/form-store';
import { capitalize } from '../helpers/helpers';
import { FormGroupOptions } from '../interfaces/form-group-options.interface';
import { FormObjectOptions } from '../interfaces/form-object-options.interface';
import { FormObjectService } from '../interfaces/form-object-service.interface';
import { FormStoreClass } from '../types/form-store-class.type';
import { ModelMetadata } from '../types/model-metadata.type';
import { FormError } from './../interfaces/form-error.interface';

// TODO better default values
const defaultModelOptions: FormObjectOptions = {
  getConfig: null, // (model: any) => model.config, // TODO see if getConfig can be removed
  getModelType: (model: any) => model.constructor.name,
};

export class FormObject<T = any> {
  protected serviceMappings: Record<string, FormObjectService>;

  public _options: FormObjectOptions<T>;
  public validators: Record<string, Array<ValidatorFn> | ValidatorFn> = {};
  public formGroupOptions: FormGroupOptions = {};
  public formStoreClass: FormStoreClass<T>;

  protected beforeSave(store: FormStore): Observable<FormStore> {
    return observableOf(store);
  }

  protected afterSave(model?: T, _form?: FormStore): Observable<T> {
    return observableOf(model);
  }

  constructor(
    public model: T,
    protected options: FormObjectOptions,
  ) {
    this._options = {
      ...defaultModelOptions,
      ...options,
    };
  }

  get attributeProperties(): Array<string> {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, this.model.constructor) || {};
    return modelMetadata.attributeProperties || [];
  }

  get hasManyProperties(): Array<string> {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, this.model.constructor) || {};
    return modelMetadata.hasManyProperties || [];
  }

  get belongsToProperties(): Array<string> {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, this.model.constructor) || {};
    return modelMetadata.belongsToProperties || [];
  }

  public getModelType(model: T): string {
    if (this._options.getConfig) {
      // TODO see if can be removed
      return this._options.getConfig(this.model.constructor).type;
    }

    return this._options.getModelType(model);
  }

  public getValidators(attributeName: string): ValidatorFn | Array<ValidatorFn> {
    return this.validators[attributeName];
  }

  public reset(form: FormStore): void {
    this.rollbackAttributes(form);
    this.rollbackBelongsToRelationships(form);
    this.rollbackHasManyRelationships(form);
  }

  public mapPropertiesToModel(form: FormStore): void {
    this.attributeProperties.forEach((propertyName: string) => {
      const formProperty = form.get(propertyName) as ExtendedFormControl;

      if (formProperty.isChanged) {
        const unmaskFunction: (value: unknown, form: FormStore) => unknown = this[`unmask${capitalize(propertyName)}`];

        const propertyValue: unknown = unmaskFunction
          ? unmaskFunction.call(this, formProperty.value, form)
          : formProperty.value;

        this.model[propertyName] = propertyValue;
      }
    });
  }

  public mapBelongsToPropertiesToModel(form: FormStore): void {
    this.belongsToProperties.forEach((propertyName) => {
      const formProperty = form.get(propertyName) as FormStore;

      if (formProperty.isChanged) {
        if (formProperty.formObject && formProperty.model && formProperty.model.id) {
          this.model[propertyName] = formProperty.model;
        } else {
          this.model[propertyName] = formProperty.value;
        }
      }
    });
  }

  public isFormValid(form: FormStore): boolean {
    return form.valid || form.disabled;
  }

  public save(form: FormStore): Observable<T> {
    return observableOf(true).pipe(
      flatMap(() => this._beforeSave(form)),
      flatMap((validFormStore: FormStore) => {
        const validatedFormWithModel$ = new ReplaySubject();

        this._save(validFormStore)
          .pipe(
            catchError((error) => {
              validatedFormWithModel$.error(error);
              return throwError(error);
            }),
          )
          .subscribe((savedModel: T) => {
            validatedFormWithModel$.next({
              savedModel,
              validFormStore,
            });
          });

        return validatedFormWithModel$;
      }),
      flatMap(({savedModel, validFormStore}) => this._afterSave(savedModel, validFormStore)),
      take(1),
      catchError((error) => throwError(error)),
    );
  }

  protected rollbackAttributes(form: FormStore): void {
    this.attributeProperties.forEach((propertyName: string) => {
      const propertyFormControl = form.get(propertyName) as ExtendedFormControl;
      const unmaskFunction: (value: unknown) => unknown = this[`unmask${capitalize(propertyName)}`];
      const propertyValue: unknown = unmaskFunction
        ? unmaskFunction.call(this, this.model[propertyName])
        : this.model[propertyName];

      if (propertyFormControl.isChanged) {
        propertyFormControl.setValue(propertyValue);
      }
    });
  }

  protected rollbackBelongsToRelationships(form: FormStore): void {
    this.belongsToProperties.forEach((propertyName) => {
      const propertyFormControl = form.get(propertyName) as ExtendedFormArray;

      if (propertyFormControl.isChanged) {
        form.get(propertyName).setValue(this.model[propertyName]);
      }
    });
  }

  protected rollbackHasManyRelationships(form: FormStore): void {
    this.hasManyProperties.forEach((propertyName) => {
      const formProperty = form.get(propertyName);

      const rollback: (key: string, control: AbstractControl, form: FormStore) => void = this[`rollback${capitalize(propertyName)}`];

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
      }),
    );

    return form$;
  }

  private _save(_form: FormStore): Observable<T> {
    const model$: Subject<T> = new Subject<T>();

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
      service.save(this.model).subscribe((model: T) => {
        model$.next(model);
      }, (error: any) => {
        model$.error(error);
      });
    });

    return model$;
  }

  private _afterSave(model: T, form: FormStore): Observable<T> {
    const form$: Observable<T> = this.afterSave(model, form).pipe(
      map((transformedModel: T) => {
        this.mapModelPropertiesToForm(transformedModel, form);
        this.resetBelongsToFormControls(transformedModel, form);
        return transformedModel;
      }),
    );

    return form$;
  }

  private mapModelPropertiesToForm(
    model: T,
    form: FormStore,
  ): void {
    this.attributeProperties.forEach((propertyName: string) => {
      const formControl = form.get(propertyName) as ExtendedFormControl;

      const maskFunction: (value: unknown, control: AbstractControl, form: FormStore) => unknown = this[`mask${capitalize(propertyName)}`];
      const newInitialValue: unknown = model[propertyName];
      const maskedInitialValue: unknown = maskFunction ? maskFunction(newInitialValue, formControl, form) : newInitialValue;

      formControl.initialValue = maskedInitialValue;
      formControl.patchValue(maskedInitialValue);
    });
  }

  private resetBelongsToFormControls(_model: T, form: FormStore): void {
    this.belongsToProperties.forEach((propertyName: string) => {
      const formControl: ExtendedFormControl = form.get(propertyName) as ExtendedFormControl;

      if (formControl.resetValue) {
        formControl.resetValue();
      }
    });
  }
}
