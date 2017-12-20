import { FormBuilder, ValidatorFn } from '@angular/forms';
import { capitalize } from '../helpers/helpers';
import { FormModel } from '../interfaces/form-model.interface';
import { FormStore } from '../form-store/form-store';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';
import { FormObject } from '../form-object/form-object';
import { ExtendedFormArray } from '../extended-form-array/extended-form-array';

export class FormObjectBuilder {
  formBuilder: FormBuilder;

  constructor() {
    this.formBuilder = new FormBuilder();
  }

  create(formObject: FormObject): FormStore {
    const formFields = {};

    Object.assign(formFields, this.createAttributeFormFields(formObject));
    Object.assign(formFields, this.createHasManyFormFields(formObject));
    Object.assign(formFields, this.createBelongsToFormFields(formObject));

    const formStoreClass: any = formObject.formStoreClass ? formObject.formStoreClass : FormStore;

    const formStore: FormStore = new formStoreClass(
      formFields,
      formObject.formGroupOptions.validator,
      formObject.formGroupOptions.asyncValidator
    );
    formStore.formObject = formObject;

    return formStore;
  }

  private createAttributeFormFields(formObject: FormObject): Object {
    const attributeFormFields = {};

    formObject.attributeProperties.forEach((attributeName: string | symbol) => {
      const buildFunction = formObject[`build${capitalize(attributeName.toString())}`];
      const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(attributeName.toString());
      const maskFunction: Function = formObject[`mask${capitalize(attributeName.toString())}`];

      const originalFieldValue: any = formObject.model[attributeName];
      const fieldValue: any = maskFunction ? maskFunction(originalFieldValue) : originalFieldValue;

      attributeFormFields[attributeName] = buildFunction
                                           ? buildFunction(fieldValue, validators)
                                           : new ExtendedFormControl(fieldValue, validators);
    });

    return attributeFormFields;
  }

  private createHasManyFormFields(formObject: FormObject): Object {
    const hasManyFormFields = {};

    formObject.hasManyProperties.forEach((propertyName) => {
      const buildFunction = formObject[`build${capitalize(propertyName.toString())}`];
      const hasManyModels = formObject.model[propertyName];

      // Build function must return instance of ExtendedFormArray
      hasManyFormFields[propertyName] = buildFunction
                                        ? buildFunction.call(formObject, hasManyModels)
                                        : this.buildRelationshipModels(formObject, propertyName, hasManyModels);
    });

    return hasManyFormFields;
  }

  private createBelongsToFormFields(formObject: FormObject): Object {
    const belongsToFormFields = {};

    formObject.belongsToProperties.forEach((propertyName: string | symbol) => {
      const buildFunction: Function = formObject[`build${capitalize(propertyName.toString())}`];
      const belongsToModel = formObject.model[propertyName] || null;
      const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(propertyName.toString());

      if (buildFunction) {
        belongsToFormFields[propertyName] = buildFunction.call(formObject, validators);
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
    formObject: FormObject,
    relationshipName: string | symbol,
    relationshipModels: Array<FormModel> = []
  ): ExtendedFormArray {
    const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(relationshipName.toString());
    const formGroups: Array<any> = [];

    relationshipModels.forEach((relationshipModel) => {
      const formStore: FormStore = this.createRelationshipFormObject(formObject, relationshipName, relationshipModel);
      if (formStore) {
        formGroups.push(formStore);
      }
    });

    const relationshipFormGroups: ExtendedFormArray = new ExtendedFormArray(formGroups, <ValidatorFn>validators);

    return relationshipFormGroups;
  }

  private createRelationshipFormObject(
    formObject: FormObject,
    relationshipName: string | symbol,
    relationshipModel: FormModel
  ): FormStore {
    const createFormObjectFunction = formObject[`create${capitalize(relationshipName.toString())}FormObject`];

    if (createFormObjectFunction) {
      const modelFormObject: FormObject = createFormObjectFunction.call(formObject, relationshipModel, null);
      const formStore: FormStore = this.create(modelFormObject);
      return formStore;
    } else {
      console.warn(`There is no function specified for creating form object for ${relationshipName}.`);
    }
  }
}
