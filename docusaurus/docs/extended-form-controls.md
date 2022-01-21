---
id: extended-form-controls
title: Extended form controls
sidebar_label: Extended form controls
---

When you use `FormObjectBuilder` to build forms from models, extended versions of form groups and controls will be created.
All of the extended controls add functionality to either `FormGroup`, `FormControl` or `FormArray`. For the most part, you can treat extended form controls just like you would regular Angular form controls.


## `ExtendedFormControl`
`ExtendedFormControl` extends `FormControl`. It exposes the following public properties:

| Property  | Return type | Description |
| --------- | ------------- | ------------|
| `get isChanged()`  | `boolean` | Returns `true` if current value is not equal to initial value, `false` otherwise |
| `get currentValue()` | `any` | Returns the current value of the control | [TODO: Why does this cast numbers to string before returning?]
| `get initialValue()` | `any` | Returns the initial value of the control |
| `set initialValue(value:any)` | | Sets the initial value of the control |
| `resetValue(value: any)`   | | Resets the underlying form control, marking it `pristine` and `untouched` and sets the current and initial value to the one provided. If no value argument is provided, sets those values to `control.currentValue` |

## ExtendedFormArray
`ExtendedFormArray` extends `FormArray`. It exposes the following public properties:

| Property | Return type | Description |
| ---------| ------------- | ------------|
| `get isChanged()` | `boolean` | Returns `true` if current value is not equal to initial value, `false` otherwise |
| `get currentValue` | `Array<any>` | Returns the current value of the control |
| `get initialValue()` | `Array<any>` | Returns the initial value of the control |
| `set initialValue(value: Array<any>)` | | Sets the initial value of the control |
| `get currentRawValue()` | `Array<any>` | Returns the current value of the array, regardless of the `disabled` status of its controls |
| `resetValue(value?: any)` | `value: any` | Resets the underlying form control, marking it `pristine` and `untouched` and sets the current and initial value to the one provided. If no value argument is provided, sets those values to `control.currentValue` |
| `clear(clearFlags?: boolean)` | | Removes all controls from the array. If `clearFlags` is `true` it also resets the array making it `pristine` and `untouched`|

## FormStore
`FormStore` extends `FormGroup`. It exposes the following public properties:

| Property | Return type | Description |
| ---------| ------------- | ------------|
| `get isChanged()` | `boolean` | Returns `true` if cany of `FormStore`'s controls or relationships have changed |
| `set formObject(formObject: FormObject)` | | Sets the `FormObject` for this `FormStore` |
| `get formObject()` | `FormObject` | Returns the underlying `FormObject` instance |
| `get model()` | `any` | Returns the model which the `FormObject` and `FormStore` were created with |
| `get isSubmitted()` | `any` | Returns true if the `FormStore` was previously submitted (`formStore.save()` was called) |
| `save()` | `Observable<any>` | Initiates the forms save chain. Calls `FormObject`s save hooks and `FormObject.save()`. Check [FormObject](form-object.md) for more details |
