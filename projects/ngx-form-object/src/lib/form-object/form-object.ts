import { ValidatorFn, Validators } from '@angular/forms';
import { Observable, of as observableOf, ReplaySubject, throwError } from 'rxjs';
import { catchError, flatMap, take } from 'rxjs/operators';
import { MetadataProperty } from '../enums/metadata-property.enum';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';
import { FormStore } from '../form-store/form-store';
import { capitalize } from '../helpers/helpers';
import { FormGroupOptions } from '../interfaces/form-group-options.interface';
import { FormObjectOptions } from '../interfaces/form-object-options.interface';
import { PropertyOptions } from '../interfaces/property-options.interface';
import { ModelMetadata } from '../types/model-metadata.type';
import { FormError } from './../interfaces/form-error.interface';

// TODO better default values
const defaultModelOptions: FormObjectOptions = {
  getConfig: null, // (model: any) => model.config, // TODO see if getConfig can be removed
  getModelType: (model: any) => model.constructor.name,
};

export abstract class FormObject {
  public _options: FormObjectOptions;
  public validators: object = {};
  public formGroupOptions: FormGroupOptions = {};
  public formStoreClass: any;

  protected beforeSave(store: FormStore): Observable<FormStore> {
    return observableOf(store);
  }

  // @ts-ignore
  protected save(model: any): Observable<FormStore> {
    return throwError(`Save function must be implemented in the corresponding form object`);
  }

  protected afterSave(model?: any, _form?: FormStore): Observable<any> {
    return observableOf(model);
  }

  constructor(
    public model: any,
    protected options: FormObjectOptions,
  ) {
    this._options = {
      ...defaultModelOptions,
      ...options,
    };
  }

  get attributeProperties(): Map<string | symbol, PropertyOptions> {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, this.model.constructor) || {};
    return modelMetadata.attributeProperties || new Map();
  }

  get attributePropertiesKeys(): Array<string | symbol> {
    return Array.from(this.attributeProperties.keys());
  }

  get hasManyProperties(): Map<string | symbol, PropertyOptions> {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, this.model.constructor) || {};
    return modelMetadata.hasManyProperties || new Map();
  }

  get hasManyPropertiesKeys(): Array<string | symbol> {
    return Array.from(this.hasManyProperties.keys());
  }

  get belongsToProperties(): Map<string | symbol, PropertyOptions> {
    const modelMetadata: ModelMetadata = Reflect.getMetadata(MetadataProperty.MODEL_METADATA, this.model.constructor) || {};
    return modelMetadata.belongsToProperties || new Map();
  }

  get belongsToPropertiesKeys(): Array<string | symbol> {
    return Array.from(this.belongsToProperties.keys());
  }

  public getModelType(model: any): string {
    if (this._options.getConfig) {
      // TODO see if can be removed
      return this._options.getConfig(this.model.constructor).type;
    }

    return this._options.getModelType(model);
  }

  public getValidators(attributeName: string): ValidatorFn | Array<ValidatorFn> {
    const validators = this.validators[attributeName];

    if (validators && validators.length > 1) {
      return Validators.compose(validators);
    } else {
      return validators;
    }
  }

  public reset(form: any): void {
    this.rollbackAttributes(form);
    this.rollbackBelongsToRelationships(form);
    this.rollbackHasManyRelationships(form);
  }

  public mapPropertiesToModel(form: any): void {
    this.attributePropertiesKeys.forEach((propertyName: string | symbol) => {
      const formProperty = form.controls[propertyName];

      if (formProperty.isChanged) {
        const unmaskFunction: Function = this[`unmask${capitalize(propertyName.toString())}`]; // tslint:disable-line: ban-types

        const propertyValue: any = unmaskFunction
          ? unmaskFunction.call(this, formProperty.value, form)
          : formProperty.value;

        this.model[propertyName] = propertyValue;
      }
    });
  }

  public mapBelongsToPropertiesToModel(form: any): void {
    this.belongsToPropertiesKeys.forEach((propertyName) => {
      const formProperty = form.controls[propertyName];

      if (formProperty.isChanged) {
        if (formProperty.formObject) {
          this.model[propertyName] = formProperty.model || formProperty.value;
        } else {
          this.model[propertyName] = formProperty.value;
        }
      }
    });
  }

  public isFormValid(form: FormStore): boolean {
    return form.valid || form.disabled;
  }

  public _save(form: FormStore): Observable<any> {
    return observableOf(true).pipe(
      flatMap(() => this._beforeSave(form)),
      flatMap((validFormStore: FormStore) => {
        const validatedFormWithModel$ = new ReplaySubject();

        this.save(this.model)
          .pipe(
            catchError((error) => {
              validatedFormWithModel$.error(error);
              return throwError(error);
            }),
          )
          .subscribe((savedModel: any) => {
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

  protected rollbackAttributes(form: any): void {
    this.attributePropertiesKeys.forEach((propertyName: string | symbol) => {
      const formProperty = form.controls[propertyName];
      const unmaskFunction: Function = this[`mask${capitalize(propertyName.toString())}`]; // tslint:disable-line: ban-types

      const propertyValue: any = unmaskFunction
        ? unmaskFunction.call(this, this.model[propertyName])
        : this.model[propertyName];

      if (formProperty.isChanged) {
        formProperty.setValue(propertyValue);
      }
    });
  }

  protected rollbackBelongsToRelationships(form: any): void {
    this.belongsToPropertiesKeys.forEach((propertyName) => {
      const formProperty = form.controls[propertyName];

      if (formProperty.isChanged) {
        form.controls[propertyName].setValue(this.model[propertyName]);
      }
    });
  }

  protected rollbackHasManyRelationships(form: any): void {
    this.hasManyPropertiesKeys.forEach((propertyName) => {
      const formProperty = form.controls[propertyName];

      const rollback: Function = this[`rollback${capitalize(propertyName.toString())}`]; // tslint:disable-line: ban-types

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

  private _afterSave(model: any, form: FormStore): Observable<any> {
    const form$: Observable<any> = this.afterSave(model, form).pipe(
      flatMap((transformedModel: any) => {
        this.mapModelPropertiesToForm(transformedModel, form);
        this.resetBelongsToFormControls(transformedModel, form);
        return observableOf(transformedModel);
      }),
    );

    return form$;
  }

  private mapModelPropertiesToForm(
    model: any,
    form: FormStore,
  ): void {
    this.attributePropertiesKeys.forEach((propertyName: string) => {
      const formControl: ExtendedFormControl = form.controls[propertyName] as ExtendedFormControl;

      const maskFunction: Function = this[`mask${capitalize(propertyName)}`]; // tslint:disable-line: ban-types
      const newInitialValue: any = model[propertyName];
      const maskedInitialValue: any = maskFunction ? maskFunction(newInitialValue, formControl, form) : newInitialValue;

      formControl.initialValue = maskedInitialValue;
      formControl.patchValue(maskedInitialValue);
    });
  }

  private resetBelongsToFormControls(_model: any, form: FormStore): void {
    this.belongsToPropertiesKeys.forEach((propertyName: string) => {
      const formControl: ExtendedFormControl = form.controls[propertyName] as ExtendedFormControl;
      if (formControl.resetValue) {
        formControl.resetValue();
      }
    });
  }
}
