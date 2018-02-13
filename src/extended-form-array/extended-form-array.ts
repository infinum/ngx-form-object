import { AbstractControl, FormArray, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { contains } from '../helpers/helpers';

function hasId(item): boolean {
  return item && (item.id || item.id === null);
}

function hasMaxOneNullableId(initialIds, currentIds): boolean {
  const initialNullables = initialIds.filter((item) => item && item.id === null).length;
  const currentNullables = currentIds.filter((item) => item && item.id === null).length;

  return initialNullables < 2 && currentNullables < 2 && initialNullables === currentNullables;
}

export class ExtendedFormArray extends FormArray {
  private _initialValue: Array<any>;

  constructor(
    controls: Array<AbstractControl>,
    validator?: ValidatorFn,
    asyncValidator?: AsyncValidatorFn
  ) {
    super(controls, validator, asyncValidator);

    this.initialValue = this.value;
  }

  get initialValue(): Array<any> {
    return this._initialValue;
  }

  set initialValue(initialValue: Array<any>) {
    this._initialValue = [].concat(initialValue);
  }

  get currentValue(): Array<any> {
    return this.value;
  }

  get isChanged(): boolean {
    const initialValue: Array<any> = this.initialValue === null ? undefined : this.initialValue;
    const currentValue: Array<any> = this.currentValue === null ? undefined : this.currentValue;

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

    const initialIds = initialValue.map((item: any) => hasId(item) ? item.id : item).filter((item: any) => item);
    const currentIds = currentValue.map((item: any) => hasId(item) ? item.id : item).filter((item: any) => item);

    const hasTheSameIds: boolean = initialIds.every((id: string) => contains(currentIds, id));

    return !hasTheSameIds && hasMaxOneNullableId(initialIds, currentIds);
  }

  public resetValue(value: any = this.initialValue): void {
    this.initialValue = value;
    this.reset(value);
  }
}
