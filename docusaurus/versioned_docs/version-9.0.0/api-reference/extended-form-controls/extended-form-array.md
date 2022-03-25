---
id: extended-form-array
title: ExtendedFormArray
sidebar_label: ExtendedFormArray
---

`ExtendedFormArray` extends `FormArray`. Tracks the value and validity state of its elements - `FormControl`, `FormGroup`, `FormStore` or `FormArray` instances.

## Constructor

```ts
constructor(
    controls: Array<AbstractControl>,
    validatorOrOpts?: ValidatorFn | Array<ValidatorFn> | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | Array<AsyncValidatorFn> | null,
    propertyOptions?: PropertyOptions
)
```

## Properties

### get isChanged

Returns `true` if current value is not equal to initial value, `false` otherwise.

| Property | Return type |
| --------- | ------------- |
| `get isChanged()` | `boolean` |

### get currentValue

Returns the current value of the control.

| Property | Return type |
| --------- | ------------- |
| `get currentValue()` | `Array<any>` |

### get currentRawValue

Returns the current value of the array, regardless of the `disabled` status of its controls .

| Property | Return type |
| --------- | ------------- |
| `get currentRawValue()` | `Array<any>` |

### initialValue

Getter and setter for initial value of the control.

| Property | Return type |
| --------- | ------------- |
| `get initialValue()` | `Array<any>` |
| `set initialValue()` | `Array<any>` |

## Methods

### clear()

Removes all controls from the array. If `clearFlags` is `true` it also resets the array making it `pristine` and `untouched`, and sets the current value to `[]`.

| Method | Return type |
| --------- | ------------- |
| `clear(clearFlags?: boolean)` | `void` |

### replaceWith()

Replaces all controls from the array with new ones. If `clearFlags` is `true` it also resets the array making it `pristine` and `untouched`.

| Method | Return type |
| --------- | ------------- |
| `replaceWith(newItems: Array<any>, clearFlags?: boolean)` | `void` |

### resetValue()

Resets the underlying form control, marking it `pristine` and `untouched` and sets the current and initial value to the one provided. If no value argument is provided, sets those values to `control.currentValue`.

| Method | Return type |
| --------- | ------------- |
| `resetValue(value?: any)` | `value: any` |
