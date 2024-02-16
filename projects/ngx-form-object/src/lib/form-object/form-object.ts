import { ValidatorFn, Validators } from '@angular/forms';
import { Observable, of as observableOf, throwError } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ExtendedFormControl } from '../extended-form-control/extended-form-control';
import { FormObjectBuilder } from '../form-object-builder/form-object-builder';
import { FormStore } from '../form-store/form-store';
import { getPropertiesFromPrototypeChain } from '../helpers/get-propertis-from-prototype-chain/get-properties-from-prototype-chain.helper';
import { capitalize } from '../helpers/helpers';
import { FormGroupOptions } from '../interfaces/form-group-options.interface';
import { FormObjectOptions } from '../interfaces/form-object-options.interface';
import { PropertyOptions } from '../interfaces/property-options.interface';
import {
	MODEL_ATTRIBUTE_PROPERTIES,
	MODEL_HAS_MANY_PROPERTIES,
	MODEL_HAS_ONE_PROPERTIES,
} from '../types/model-metadata.type';

const formPropertyKey = Symbol('form');

// TODO better default values
const defaultModelOptions: FormObjectOptions = {
	getConfig: null, // (model: any) => model.config, // TODO see if getConfig can be removed
	getModelType: (model: any) => model.constructor.name,
};

export abstract class FormObject {
	public _options: FormObjectOptions;
	public validators: Record<string, ValidatorFn | Array<ValidatorFn>> = {};
	public formGroupOptions: FormGroupOptions = {};
	public formStoreClass: any;

	protected beforeSave(store: FormStore): Observable<FormStore> {
		return observableOf(store);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	protected save(_model: any): Observable<any> {
		return throwError('Save function must be implemented in the corresponding form object');
	}

	protected afterSave(model?: any, _form?: FormStore): Observable<any> {
		return observableOf(model);
	}

	constructor(public model: any, protected options: FormObjectOptions) {
		this._options = {
			...defaultModelOptions,
			...options,
		};
	}

	public get form(): FormStore {
		if (!this[formPropertyKey]) {
			return this.initializeForm();
		}

		return this[formPropertyKey];
	}

	public get attributeProperties(): Map<string | symbol, PropertyOptions> {
		return getPropertiesFromPrototypeChain.call(this.model, MODEL_ATTRIBUTE_PROPERTIES);
	}

	public get attributePropertiesKeys(): Array<string | symbol> {
		return Array.from(this.attributeProperties.keys());
	}

	public get hasManyProperties(): Map<string | symbol, PropertyOptions> {
		return getPropertiesFromPrototypeChain.call(this.model, MODEL_HAS_MANY_PROPERTIES);
	}

	public get hasManyPropertiesKeys(): Array<string | symbol> {
		return Array.from(this.hasManyProperties.keys());
	}

	public get belongsToProperties(): Map<string | symbol, PropertyOptions> {
		return getPropertiesFromPrototypeChain.call(this.model, MODEL_HAS_ONE_PROPERTIES);
	}

	public get belongsToPropertiesKeys(): Array<string | symbol> {
		return Array.from(this.belongsToProperties.keys());
	}

	public getModelType(model: any): string {
		if (this._options.getConfig) {
			// TODO see if can be removed
			return this._options.getConfig(this.model.constructor).type;
		}

		return this._options.getModelType(model);
	}

	public getValidators(attributeName: string): ValidatorFn {
		const validators = this.validators[attributeName];

		if (validators && (validators as Array<ValidatorFn>).length > 1) {
			return Validators.compose(validators as Array<ValidatorFn>);
		} else {
			return validators as ValidatorFn;
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
				const unmaskFunction: Function = this[`unmask${capitalize(propertyName.toString())}`];

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
		return this._beforeSave(form).pipe(
			switchMap((validFormStore: FormStore) => {
				return this.save(this.model).pipe(
					map((savedModel: any) => {
						return { savedModel, validFormStore };
					}),
				);
			}),
			switchMap(({ savedModel, validFormStore }) => this._afterSave(savedModel, validFormStore)),
		);
	}

	protected rollbackAttributes(form: any): void {
		this.attributePropertiesKeys.forEach((propertyName: string | symbol) => {
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

			const rollback: Function = this[`rollback${capitalize(propertyName.toString())}`];

			if (rollback) {
				rollback.call(this, propertyName, formProperty, form);
			}
		});
	}

	private _beforeSave(form: FormStore): Observable<FormStore> {
		return this.beforeSave(form).pipe(
			switchMap((transformedForm: FormStore) => {
				this.mapPropertiesToModel(transformedForm);
				this.mapBelongsToPropertiesToModel(transformedForm);

				if (!this.isFormValid(transformedForm)) {
					return throwError({ valid: false, message: 'Form is not valid. Save aborted.' });
				}

				return observableOf(transformedForm);
			}),
		);
	}

	private _afterSave(model: any, form: FormStore): Observable<any> {
		return this.afterSave(model, form).pipe(
			tap((transformedModel: any) => {
				this.mapModelPropertiesToForm(transformedModel, form);
				this.resetBelongsToFormControls(transformedModel, form);
			}),
		);
	}

	private mapModelPropertiesToForm(model: any, form: FormStore): void {
		this.attributePropertiesKeys.forEach((propertyName: string) => {
			const formControl: ExtendedFormControl = form.controls[propertyName] as ExtendedFormControl;

			const maskFunction: Function = this[`mask${capitalize(propertyName)}`];
			const newInitialValue: any = model[propertyName];
			const maskedInitialValue: any = maskFunction
				? maskFunction(newInitialValue, formControl, form)
				: newInitialValue;

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

	private createForm(): FormStore {
		const formBuilder: FormObjectBuilder = new FormObjectBuilder();
		return formBuilder.create(this);
	}

	public initializeForm(): FormStore {
		const form: FormStore = this.createForm();
		this[formPropertyKey] = form;
		return form;
	}
}
