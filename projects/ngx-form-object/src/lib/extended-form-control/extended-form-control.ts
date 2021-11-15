import { AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { isNumber } from '../helpers/helpers';
import { isDate } from '../helpers/is-date/is-date.helper';
import { isObject } from '../helpers/is-object/is-object.helper';
import { PropertyOptions } from '../interfaces/property-options.interface';

export class ExtendedFormControl extends FormControl {
  private _initialValue: any;

  constructor(
    formState?: any,
    validator?: ValidatorFn | Array<ValidatorFn>,
    asyncValidator?: AsyncValidatorFn | Array<AsyncValidatorFn>,
    private readonly isRelationship: boolean = false,
    private propertyOptions: PropertyOptions = {},
  ) {
    super(formState, validator, asyncValidator);
    this.initialValue = this.value;
  }

  get isChanged(): boolean {
    const initialValue = this.initialValue === null ? undefined : this.initialValue;
    const currentValue = this.currentValue === null ? undefined : this.currentValue;

    if (this.propertyOptions.isChanged) {
      return this.propertyOptions.isChanged(initialValue, currentValue);
    }

    if (this.isRelationship) {
      const initialId: string = initialValue ? initialValue.id : initialValue;
      const currentId: string = currentValue ? currentValue.id : currentValue;
      return initialId !== currentId;
    }

    // Empty objects should be equal
    if (isObject(initialValue) && isObject(currentValue)) {
      if (!isDate(initialValue) && !isDate(currentValue)) {
        if (Object.keys(initialValue).length === 0 && Object.keys(currentValue).length === 0) {
          return false;
        }
      }
    }

    return initialValue !== currentValue;
  }

  get currentValue(): any {
    return isNumber(this.value) ? this.value.toString() : this.value;
  }

  get initialValue(): any {
    if (this._initialValue === null && typeof this.value === 'string')  {
      return '';
    }

    return this._initialValue;
  }

  set initialValue(value: any) {
    value = isNumber(value) ? value.toString() : value;
    this._initialValue = value;
  }

  public resetValue(value: any = this.currentValue): void {
    this.initialValue = value;
    this.reset(value);
  }
}
