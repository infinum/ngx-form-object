import { AbstractControl, FormBuilder, ValidatorFn } from '@angular/forms';
import { ExtendedFormArray } from '../extended-form-array/extended-form-array';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';
import { FormObject } from '../form-object/form-object';
import { FormStore } from '../form-store/form-store';
import { capitalize } from '../helpers/helpers';

export class FormObjectBuilder<T = any> {
  public formBuilder: FormBuilder;

  constructor() {
    this.formBuilder = new FormBuilder();
  }

  public create(formObject: FormObject<T>): FormStore<T> {
    const formFields: Record<string, AbstractControl> = {};

    Object.assign(formFields, this.createAttributeFormFields(formObject));
    Object.assign(formFields, this.createHasManyFormFields(formObject));
    Object.assign(formFields, this.createBelongsToFormFields(formObject));

    const formStoreClass = formObject.formStoreClass ? formObject.formStoreClass : FormStore;

    const formStore: FormStore = new formStoreClass(
      formFields,
      formObject.formGroupOptions.validator,
      formObject.formGroupOptions.asyncValidator,
    );
    formStore.formObject = formObject;

    return formStore;
  }

  private createAttributeFormFields(formObject: FormObject<T>): Record<string, AbstractControl> {
    const attributeFormFields = {};

    formObject.attributeProperties.forEach((attributeName: string) => {
      const buildFunction: (
        fieldValue: unknown,
        validators: ValidatorFn,
      ) => ExtendedFormControl = formObject[`build${capitalize(attributeName)}`];
      const validators = formObject.getValidators(attributeName);
      const maskFunction: (oldValue: unknown) => unknown = formObject[`mask${capitalize(attributeName)}`];

      const originalFieldValue: unknown = formObject.model[attributeName];
      const fieldValue: unknown = maskFunction ? maskFunction(originalFieldValue) : originalFieldValue;

      attributeFormFields[attributeName] = buildFunction
                                           ? buildFunction.call(formObject, fieldValue, validators)
                                           : new ExtendedFormControl(fieldValue, validators);
    });

    return attributeFormFields;
  }

  private createHasManyFormFields(formObject: FormObject<T>): Record<string, AbstractControl> {
    const hasManyFormFields = {};

    formObject.hasManyProperties.forEach((propertyName) => {
      const buildFunction: (
        models: Array<unknown>,
        validators: ValidatorFn,
      ) => ExtendedFormArray = formObject[`build${capitalize(propertyName)}`];
      const validators = formObject.getValidators(propertyName);
      const hasManyModels: Array<unknown> = formObject.model[propertyName];

      // Build function must return instance of ExtendedFormArray
      hasManyFormFields[propertyName] = buildFunction
                                        ? buildFunction.call(formObject, hasManyModels, validators)
                                        : this.buildRelationshipModels(formObject, propertyName, hasManyModels);
    });

    return hasManyFormFields;
  }

  private createBelongsToFormFields(formObject: FormObject<T>): Record<string, AbstractControl> {
    const belongsToFormFields = {};

    formObject.belongsToProperties.forEach((propertyName: string) => {
      const buildFunction: (
        model: unknown,
        validators: ValidatorFn,
      ) => FormStore = formObject[`build${capitalize(propertyName)}`];
      const belongsToModel = formObject.model[propertyName] || null;
      const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(propertyName);

      if (buildFunction) {
        belongsToFormFields[propertyName] = buildFunction.call(formObject, belongsToModel, validators);
      } else {
        belongsToFormFields[propertyName] = this.createRelationshipFormObject(formObject, propertyName, belongsToModel);

        if (!belongsToFormFields[propertyName]) {
          belongsToFormFields[propertyName] = new ExtendedFormControl(belongsToModel, validators, null, true);
        }
      }
    });

    return belongsToFormFields;
  }

  private buildRelationshipModels(
    formObject: FormObject<T>,
    relationshipName: string,
    relationshipModels: Array<unknown> = [],
  ): ExtendedFormArray {
    const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(relationshipName.toString());
    const formGroups: Array<AbstractControl> = [];

    relationshipModels.forEach((relationshipModel) => {
      const formStore: FormStore = this.createRelationshipFormObject(formObject, relationshipName, relationshipModel);
      if (formStore) {
        formGroups.push(formStore);
      }
    });

    const relationshipFormGroups: ExtendedFormArray = new ExtendedFormArray(formGroups, validators as ValidatorFn);

    return relationshipFormGroups;
  }

  private createRelationshipFormObject(
    formObject: FormObject<T>,
    relationshipName: string,
    relationshipModel: unknown,
  ): FormStore {
    const createFormObjectFunction = formObject[`create${capitalize(relationshipName.toString())}FormObject`];

    if (createFormObjectFunction) {
      const modelFormObject: FormObject = createFormObjectFunction.call(formObject, relationshipModel, null);
      const formStore: FormStore = this.create(modelFormObject);
      return formStore;
    } else {
      console.warn(`There is no function specified for creating form object for ${relationshipName.toString()}.`);
    }
  }
}
