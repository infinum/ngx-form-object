import { FormBuilder, ValidatorFn } from '@angular/forms';
import { ExtendedFormArray } from '../extended-form-array/extended-form-array';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';
import { FormObject } from '../form-object/form-object';
import { FormStore } from '../form-store/form-store';
import { capitalize } from '../helpers/helpers';
import { PropertyOptions } from '../interfaces/property-options.interface';
import { CREATE_FORM_OBJECT_METHODS } from '../types/model-metadata.type';

export class FormObjectBuilder {
	public formBuilder: FormBuilder;

	constructor() {
		this.formBuilder = new FormBuilder();
		console.log('ddd');
	}

	public create(formObject: FormObject): FormStore {
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

	private createAttributeFormFields(formObject: FormObject): Record<string, unknown> {
		const attributeFormFields = {};

		formObject.attributePropertiesKeys.forEach((attributeName: string | symbol) => {
			const buildFunction = formObject[`build${capitalize(attributeName.toString())}`];
			const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(attributeName.toString());
			const maskFunction: Function = formObject[`mask${capitalize(attributeName.toString())}`];

			const originalFieldValue: any = formObject.model[attributeName];
			const fieldValue: any = maskFunction ? maskFunction(originalFieldValue) : originalFieldValue;
			const propertyOptions: PropertyOptions = formObject.attributeProperties.get(attributeName);

			attributeFormFields[attributeName] = buildFunction
				? buildFunction.call(formObject, fieldValue, validators, propertyOptions)
				: new ExtendedFormControl(fieldValue, validators, null, false, propertyOptions);
		});

		return attributeFormFields;
	}

	private createHasManyFormFields(formObject: FormObject): Record<string, unknown> {
		const hasManyFormFields = {};

		formObject.hasManyPropertiesKeys.forEach((propertyName) => {
			const buildFunction = formObject[`build${capitalize(propertyName.toString())}`];
			const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(propertyName.toString());
			const hasManyModels = formObject.model[propertyName];
			const propertyOptions: PropertyOptions = formObject.hasManyProperties.get(propertyName);
			// Build function must return instance of ExtendedFormArray
			hasManyFormFields[propertyName] = buildFunction
				? buildFunction.call(formObject, hasManyModels, validators, propertyOptions)
				: this.buildRelationshipModels(formObject, propertyName, hasManyModels, propertyOptions);
		});

		return hasManyFormFields;
	}

	private createBelongsToFormFields(formObject: FormObject): Record<string, unknown> {
		const belongsToFormFields = {};

		formObject.belongsToPropertiesKeys.forEach((propertyName: string | symbol) => {
			const buildFunction: Function = formObject[`build${capitalize(propertyName.toString())}`];
			const belongsToModel = formObject.model[propertyName] || null;
			const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(propertyName.toString());
			const propertyOptions: PropertyOptions = formObject.belongsToProperties.get(propertyName);

			if (buildFunction) {
				belongsToFormFields[propertyName] = buildFunction.call(formObject, belongsToModel, validators, propertyOptions);
			} else {
				belongsToFormFields[propertyName] = this.createRelationshipFormObject(
					formObject,
					propertyName,
					belongsToModel,
					propertyOptions
				);

				if (!belongsToFormFields[propertyName]) {
					belongsToFormFields[propertyName] = new ExtendedFormControl(
						belongsToModel,
						validators,
						null,
						true,
						propertyOptions
					);
				}
			}
		});

		return belongsToFormFields;
	}

	private buildRelationshipModels(
		formObject: FormObject,
		relationshipName: string | symbol,
		relationshipModels: Array<any> = [],
		propertyOptions: PropertyOptions
	): ExtendedFormArray {
		const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(relationshipName.toString());
		const formGroups: Array<any> = [];

		relationshipModels.forEach((relationshipModel) => {
			const formStore: FormStore = this.createRelationshipFormObject(formObject, relationshipName, relationshipModel);
			if (formStore) {
				formGroups.push(formStore);
			}
		});

		const relationshipFormGroups: ExtendedFormArray = new ExtendedFormArray(
			formGroups,
			validators as ValidatorFn,
			null,
			propertyOptions
		);

		return relationshipFormGroups;
	}

	private createRelationshipFormObject(
		formObject: FormObject,
		relationshipName: string | symbol,
		relationshipModel: any,
		propertyOptions: PropertyOptions = {}
	): FormStore {
		const relationshipNameString: string = relationshipName.toString();

		// Deprecated in favour of create form object decorators
		let createFormObjectFunction = formObject[`create${capitalize(relationshipNameString)}FormObject`];

		if (formObject[CREATE_FORM_OBJECT_METHODS] && formObject[CREATE_FORM_OBJECT_METHODS].get(relationshipNameString)) {
			createFormObjectFunction = formObject[CREATE_FORM_OBJECT_METHODS].get(relationshipNameString);
		}

		if (createFormObjectFunction) {
			const modelFormObject: FormObject = createFormObjectFunction.call(
				formObject,
				relationshipModel,
				null,
				propertyOptions
			);
			const formStore: FormStore = this.create(modelFormObject);
			return formStore;
		} else {
			// There is no function specified for creating form object for ${relationshipName.toString()}
			// noop
		}
	}
}
