import { AbstractControl, FormBuilder, ValidatorFn } from '@angular/forms';
import { ExtendedFormArray } from '../extended-form-array/extended-form-array';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';
import { FormObject } from '../form-object/form-object';
import { FormStore } from '../form-store/form-store';
import { capitalize } from '../helpers/helpers';
import { PropertyOptions } from '../interfaces/property-options.interface';

export class FormObjectBuilder {
	public formBuilder: FormBuilder;

	constructor() {
		this.formBuilder = new FormBuilder();
	}

	public create<T>(formObject: FormObject<T>): FormStore<T> {
		const formFields: Record<string, AbstractControl> = {};

		Object.assign(formFields, this.createAttributeFormFields(formObject));
		Object.assign(formFields, this.createHasManyFormFields(formObject));
		Object.assign(formFields, this.createBelongsToFormFields(formObject));

		const formStoreClass = formObject.formStoreClass || FormStore;

		const formStore: FormStore<T> = new formStoreClass(
			formFields,
			formObject.formGroupOptions.validator,
			formObject.formGroupOptions.asyncValidator
		);
		formStore.formObject = formObject;

		return formStore;
	}

	private createAttributeFormFields<T>(formObject: FormObject<T>): object {
		const attributeFormFields: Record<string, AbstractControl> = {};

		formObject.attributePropertiesKeys.forEach((attributeName: string) => {
			const buildFunction = formObject[`build${capitalize(attributeName.toString())}`];
			const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(attributeName.toString());
			const maskFunction: Function = formObject[`mask${capitalize(attributeName.toString())}`]; // tslint:disable-line: ban-types

			const originalFieldValue: any = formObject.model[attributeName];
			const fieldValue: any = maskFunction ? maskFunction(originalFieldValue) : originalFieldValue;
			const propertyOptions: PropertyOptions = formObject.attributeProperties.get(attributeName);

			attributeFormFields[attributeName] = buildFunction
				? buildFunction.call(formObject, fieldValue, validators, propertyOptions)
				: new ExtendedFormControl(fieldValue, validators, null, false, propertyOptions);
		});

		return attributeFormFields;
	}

	private createHasManyFormFields<T>(formObject: FormObject<T>): object {
		const hasManyFormFields: Record<string, AbstractControl> = {};

		formObject.hasManyPropertiesKeys.forEach((propertyName: string) => {
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

	private createBelongsToFormFields<T>(formObject: FormObject<T>): object {
		const belongsToFormFields = {};

		formObject.belongsToPropertiesKeys.forEach((propertyName: string | symbol) => {
			const buildFunction: Function = formObject[`build${capitalize(propertyName.toString())}`]; // tslint:disable-line: ban-types
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

	private buildRelationshipModels<T>(
		formObject: FormObject<T>,
		relationshipName: string | symbol,
		relationshipModels: Array<any> = [],
		propertyOptions: PropertyOptions
	): ExtendedFormArray {
		const validators: ValidatorFn | Array<ValidatorFn> = formObject.getValidators(relationshipName.toString());
		const formGroups: Array<any> = [];

		relationshipModels.forEach((relationshipModel) => {
			const formStore: FormStore<T> = this.createRelationshipFormObject(
				formObject,
				relationshipName,
				relationshipModel
			);
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

	private createRelationshipFormObject<T>(
		formObject: FormObject<T>,
		relationshipName: string | symbol,
		relationshipModel: any,
		propertyOptions: PropertyOptions = {}
	): FormStore<T> {
		const createFormObjectFunction = formObject[`create${capitalize(relationshipName.toString())}FormObject`];

		if (createFormObjectFunction) {
			const modelFormObject: FormObject<T> = createFormObjectFunction.call(
				formObject,
				relationshipModel,
				null,
				propertyOptions
			);
			const formStore: FormStore<T> = this.create(modelFormObject);
			return formStore;
		} else {
			// There is no function specified for creating form object for ${relationshipName.toString()}
			// noop
		}
	}
}
