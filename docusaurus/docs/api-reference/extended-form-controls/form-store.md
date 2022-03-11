---
id: form-store
title: FormStore
sidebar_label: FormStore
---

`FormStore` extends `FormGroup`. Tracks the value and validity state of a group of `AbstractControl` instances.

## Constructor

Creates a new `FormStore` instance.

```ts
constructor(
    controls: { [key: string]: AbstractControl; },
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
)
```

## Properties

### get isChanged

Returns `true` if any of `FormStore`'s controls or relationships have changed.

| Property | Return type |
| --------- | ------------- |
| `get isChanged()` | `boolean` |

### formObject

Getter and setter for `FormObject` for this `FormStore`.

| Property | Return type |
| --------- | ------------- |
| `set formObject(formObject: FormObject<T>)` | | Sets the `FormObject` for this `FormStore` |
| `get formObject()` | `FormObject<T>` | Returns the underlying `FormObject` instance |

### get model

Returns the model which the `FormObject` and `FormStore` were created with.

| Property | Return type |
| --------- | ------------- |
| `get model()` | `T` |

### get isSubmitted

Returns `true` if the `FormStore` was previously submitted (`formStore.save()` was called).

| Property | Return type |
| --------- | ------------- |
| `get isSubmitted()` | `boolean` |

## Methods

### save()

Initiates the forms save chain. Calls `FormObject`s save hooks and `FormObject.save()`. Check [FormObject](form-object.md) for more details.

| Method | Return type |
| --------- | ------------- |
| `save()` | `Observable<T>` |
