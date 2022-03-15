---
id: extended-form-control
title: ExtendedFormControl
sidebar_label: ExtendedFormControl
---

`ExtendedFormControl` extends `FormControl`. Tracks the value and validation status of an individual form control.

## Constructor

```ts
constructor(
    formState?: any,
    validator?: ValidatorFn | Array<ValidatorFn>,
    asyncValidator?: AsyncValidatorFn | Array<AsyncValidatorFn>,
    isRelationship?: boolean,
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
| `get currentValue()` | `any` |

### initialValue

Getter and setter for initial value of the control.

| Property | Return type |
| --------- | ------------- |
| `get initialValue()` | `any` |
| `set initialValue()` | `any` |

## Methods

### resetValue()

Resets the underlying form control, marking it `pristine` and `untouched` and sets the current and initial value to the one provided. If no value argument is provided, sets those values to `control.currentValue`.

| Method | Return type |
| --------- | ------------- |
| `resetValue(value?: any)` | `value: any` |
