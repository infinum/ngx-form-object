import { FormControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { isNumber } from '../helpers/helpers';

export class ExtendedFormControl extends FormControl {
  private _initialValue: any;

  constructor(
    formState?: any,
    validator?: ValidatorFn | ValidatorFn[],
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[],
    private isRelationship: Boolean = false
  ) {
    super(formState, validator, asyncValidator);

    this.initialValue = this.value;
  }

  get isChanged(): boolean {
    const initialValue = this.initialValue === null ? undefined : this.initialValue;
    const currentValue = this.currentValue === null ? undefined : this.currentValue;

    if (this.isRelationship) {
      const initialId: string = initialValue ? initialValue.id : initialValue;
      const currentId: string = currentValue ? currentValue.id : currentValue;
      return initialId !== currentId;
    }

    return initialValue !== currentValue;
  }

  get currentValue(): any {
    return isNumber(this.value) ? this.value.toString() : this.value;
  }

  get initialValue(): any {
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
