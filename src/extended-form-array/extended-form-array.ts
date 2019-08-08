import { AbstractControl, FormArray, ValidatorFn, AsyncValidatorFn, AbstractControlOptions } from '@angular/forms';
import { contains } from '../helpers/helpers';
import { isObject } from '../helpers/is-object/is-object.helper';

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
    validatorOrOpts?: ValidatorFn | Array<ValidatorFn> | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | Array<AsyncValidatorFn> | null,
  ) {
    super(controls, validatorOrOpts, asyncValidator);

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

    const hasAllEmptyObjects: boolean = this.controls.every((element: any) => {
      // Empty objects should be equal
      if (isObject(initialValue) && isObject(currentValue)) {
        if (Object.keys(initialValue).length === 0 && Object.keys(currentValue).length === 0) {
          return true;
        }
      }

      return false;
    });

    if (hasAllEmptyObjects) {
      return false;
    }

    const initialIds = initialValue.map((item: any) => hasId(item) ? item.id : item).filter((item: any) => item);
    const currentIds = currentValue.map((item: any) => hasId(item) ? item.id : item).filter((item: any) => item);

    const hasTheSameIds: boolean = initialIds.every((id: string) => contains(currentIds, id));

    return !hasTheSameIds && hasMaxOneNullableId(initialIds, currentIds);
  }

  public clear(clearFlags?: boolean): void {
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
      this.resetValue(this.controls);
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
