import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormArray, ValidatorFn } from '@angular/forms';
import { contains } from '../helpers/helpers';
import { isFormStore } from '../helpers/is-form-store/is-form-store.helper';
import { isObject } from '../helpers/is-object/is-object.helper';
import { PropertyOptions } from '../interfaces/property-options.interface';

function hasId<T extends any = any>(item: T): boolean {
	return item && (item['id'] || item['id'] === null);
}

function hasMaxOneNullableId<T extends any = any>(initialIds: Array<T>, currentIds: Array<T>): boolean {
	const initialNullables = initialIds.filter((item) => item && item['id'] === null).length;
	const currentNullables = currentIds.filter((item) => item && item['id'] === null).length;

	return initialNullables < 2 && currentNullables < 2 && initialNullables === currentNullables;
}

export class ExtendedFormArray extends FormArray {
	private _initialValue: Array<any>;

	constructor(
		controls: Array<AbstractControl>,
		validatorOrOpts?: ValidatorFn | Array<ValidatorFn> | AbstractControlOptions | null,
		asyncValidator?: AsyncValidatorFn | Array<AsyncValidatorFn> | null,
		private readonly propertyOptions: PropertyOptions = {}
	) {
		super(controls, validatorOrOpts, asyncValidator);

		this.initialValue = this.value;
	}

	public get initialValue(): Array<any> {
		return this._initialValue;
	}

	public set initialValue(initialValue: Array<any>) {
		this._initialValue = [].concat(initialValue);
	}

	public get currentValue(): Array<any> {
		return this.value;
	}

	public get currentRawValue(): Array<any> {
		return this.getRawValue();
	}

	public get isChanged(): boolean {
		// Ideally, use raw value for initial value also. We now rely on initialValue not having any disabled forms
		const initialValue: Array<any> = this.initialValue === null ? undefined : this.initialValue;
		const currentValue: Array<any> = this.currentValue === null ? undefined : this.currentRawValue;

		if (this.propertyOptions.isChanged) {
			return this.propertyOptions.isChanged(initialValue, currentValue);
		}

		if (initialValue.length !== currentValue.length) {
			return true;
		}

		// Both arrays are empty
		if (!initialValue.length && !currentValue.length) {
			return false;
		}

		const isSomethingChanged: boolean = this.controls.some((item: any) => item && item['isChanged']);

		if (isSomethingChanged) {
			return true;
		}

		const hasAllFormStoreElements: boolean = this.controls.every((element: any) => {
			return isFormStore(element);
		});

		if (hasAllFormStoreElements) {
			return this.controls.some((element: any) => {
				return element.isChanged;
			});
		}

		const hasAllEmptyObjects: boolean = this.controls.every((element: any) => {
			// Empty objects should be equal
			if (isObject(element.initialValue) && isObject(element.currentValue)) {
				if (Object.keys(element.initialValue).length === 0 && Object.keys(element.currentValue).length === 0) {
					return true;
				}
			}

			return false;
		});

		if (hasAllEmptyObjects) {
			return false;
		}

		const initialIds = initialValue.map((item: any) => (hasId(item) ? item.id : item)).filter((item: any) => item);
		const currentIds = currentValue.map((item: any) => (hasId(item) ? item.id : item)).filter((item: any) => item);

		const hasTheSameIds: boolean = initialIds.every((id: string) => contains(currentIds, id));

		return !hasTheSameIds && hasMaxOneNullableId(initialIds, currentIds);
	}

	public clearValue(clearFlags?: boolean): void {
		this.emptyTheArray();

		if (clearFlags) {
			this.resetValue([]);
			this.updateValueAndValidity();
		}
	}

	public replaceWith(newItems: Array<any>, clearFlags?: boolean): void {
		this.emptyTheArray();

		newItems.forEach((item: any) => {
			this.push(item);
		});

		if (clearFlags) {
			this.resetValue(this.currentValue);
			this.updateValueAndValidity();
		}
	}

	public resetValue(value: any = this.initialValue): void {
		this.initialValue = value;
		this.reset(value);
	}

	private emptyTheArray(): void {
		while (this.length) {
			this.removeAt(0);
		}
	}
}
