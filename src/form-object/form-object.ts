import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { ValidatorFn, Validators } from '@angular/forms';
import { capitalize, contains } from '../helpers/helpers';
import { FormObjectOptions } from '../interfaces/form-object-options.interface';
import { FormGroupOptions } from '../interfaces/form-group-options.interface';
import { FormModel } from '../interfaces/form-model.interface';
import { FormStore } from '../form-store/form-store';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';
import { ExtendedFromArray } from '../extended-form-array/extended-form-array';

const defaultModelOptions: FormObjectOptions = {
  attributesTransformer: (model: FormModel) => model.attributeProperties,
  hasManyTransformer: (model: FormModel) => model.hasManyProperties,
  belongsToTransformer: (model: FormModel) => model.belongsToProperties,
  getConfig: (model: FormModel) => model.config,
};

export class FormObject {
  protected serviceMappings: Object;

  // For properties listed in this array, form fields won't be generated
  protected blacklistedProperties: Array<string> = [];

  public _options: FormObjectOptions;
  public validators: Object = {};
  public formGroupOptions: FormGroupOptions = {};
  public formStoreClass: any;

  protected beforeSave(store: FormStore): Observable<FormStore> {
    return Observable.of(store);
  }

  protected afterSave(model?: FormModel, form?: FormStore): Observable<FormModel> {
    return Observable.of(model);
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

  get attributeProperties(): Array<string> {
    const properties: Array<string> = this._options.attributesTransformer(this.model);

    return Object.keys(properties).filter((propertyName: string) => {
      return !contains(this.blacklistedProperties, propertyName);
    });
  }

  get hasManyProperties(): Array<string> {
    const properties = {};

    const hasManyProperties = this._options.hasManyTransformer(this.model) || [];

    hasManyProperties.forEach((property) => {
      properties[property.propertyName] = property;
    });

    return Object.keys(properties).filter((propertyName: string) => {
      return !contains(this.blacklistedProperties, propertyName);
    });
  }

  get belongsToProperties(): Array<string> {
    const properties = {};

    const belongsTo = this._options.belongsToTransformer(this.model) || [];

    belongsTo.forEach((property) => {
      properties[property.propertyName] = property;
    });

    return Object.keys(properties).filter((propertyName: string) => {
      return !contains(this.blacklistedProperties, propertyName);
    });
  }

  getModelType(model: FormModel): string {
    return this._options.getConfig(this.model.constructor).type;
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
    this.attributeProperties.forEach((propertyName) => {
      const formProperty = form.controls[propertyName];

      if (formProperty.isChanged) {
        const unmaskFunction: Function = this[`unmask${capitalize(propertyName)}`];

        const propertyValue: any = unmaskFunction
          ? unmaskFunction.call(this, formProperty.value)
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
    return form.valid;
  }

  public save(form: FormStore): Observable<FormModel> {
    const form$: Subject<FormModel> = new Subject<FormModel>();

    // TODO refactor in more rxjs way
    this._beforeSave(form).subscribe((validForm: FormStore) => {
      this._save(validForm).subscribe((savedModel: FormModel) => {
        this._afterSave(savedModel, validForm).subscribe((model: FormModel) => {
          form$.next(model);
        });
      });
    });

    return form$;
  }

  protected rollbackAttributes(form) {
    this.attributeProperties.forEach((propertyName) => {
      const formProperty = form.controls[propertyName];
      const unmaskFunction: Function = this[`mask${capitalize(propertyName)}`];

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

      const rollback: Function = this[`rollback${capitalize(propertyName)}`];

      if (rollback) {
        rollback.call(this, propertyName, formProperty, form);
      }
    });
  }

  private _beforeSave(form: FormStore): Observable<FormStore> {
    const form$: Observable<FormStore> = this.beforeSave(form).flatMap((transformedForm: FormStore) => {
      this.mapPropertiesToModel(transformedForm);
      this.mapBelongsToPropertiesToModel(transformedForm);

      if (!this.isFormValid(transformedForm)) {
        return Observable.create(() => {
          return new Error('Form is not valid. Save aborted.');
        });
      }

      return Observable.of(transformedForm);
    });

    return form$;
  }

  private _save(form: FormStore): Observable<FormModel> {
    const model$: Subject<FormModel> = new Subject<FormModel>();

    const modelType: string = this.getModelType(this.model);
    const service = this.serviceMappings[modelType];

    if (!service) {
      console.warn(`Service for ${modelType} is not found in service mappings.`);
    }

    service.save(this.model).subscribe((model: FormModel) => {
      model$.next(model);
    });

    return model$;
  }

  private _afterSave(model: FormModel, form: FormStore): Observable<FormModel> {
    const form$: Observable<FormModel> = this.afterSave(model, form).flatMap((transformedModel: FormModel) => {
      this.mapModelPropertiesToForm(transformedModel, form);
      this.resetBelongsToFormControls(transformedModel, form);
      this.resetHasManyFormControls(transformedModel, form);
      return Observable.of(transformedModel);
    });

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

  private resetHasManyFormControls(model: FormModel, form: FormStore): void {
    this.hasManyProperties.forEach((propertyName: string) => {
      const formControl: ExtendedFromArray = form.controls[propertyName] as ExtendedFromArray;
      if (formControl.resetValue) {
        formControl.resetValue();
      }
    });
  }
}
