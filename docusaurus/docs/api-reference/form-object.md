---
id: form-object
title: FormObject
sidebar_label: FormObject
---
`FormObject` provides a way to specify how its relationship controls will be created.
It also provides a way to define specific saving behaviour through its saving hooks. Check [saving forms guide](../guides/saving-forms.md) for more details.

## Constructor

```ts
constructor(model: T, options: FormObjectOptions);
```

## Properties

### get form

| Property | Return type |
| --------- | ------------- |
| `get form` | <code>FormStore</code> |


### attributeProperties

| Property | Return type |
| --------- | ------------- |
| `readonly attributeProperties` | <code>Map&lt;string &#124; symbol, PropertyOptions&gt;</code> |

### attributePropertiesKeys

| Property | Return type |
| --------- | ------------- |
| `readonly attributePropertiesKeys` | <code>Array&lt;string &#124; symbol&gt;</code> |

### belongsToProperties

| Property | Return type |
| --------- | ------------- |
| `readonly belongsToProperties` | <code>Map&lt;string &#124; symbol, PropertyOptions&gt;</code> |

### belongsToPropertiesKeys

| Property | Return type |
| --------- | ------------- |
| `readonly belongsToPropertiesKeys` | <code>Array&lt;string &#124; symbol&gt;</code> |

### formGroupOptions

Used for defining form field group options.

| Property | Return type |
| --------- | ------------- |
| `get formGroupOptions()` | `FormGroupOptions` |
| `set formGroupOptions()` | `FormGroupOptions` |

### formStoreClass

Used for defining class from which `FormStore` will be created.

| Property | Return type |
| --------- | ------------- |
| `get formStoreClass()` | `new () => FormStore<T>` |
| `set formStoreClass()` | `new () => FormStore<T>` |

### hasManyProperties

| Property | Return type |
| --------- | ------------- |
| `readonly hasManyProperties` | <code>Map&lt;string &#124; symbol, PropertyOptions&gt;</code> |

### hasManyPropertiesKeys

| Property | Return type |
| --------- | ------------- |
| `readonly hasManyPropertiesKeys` | <code>Array&lt;string &#124; symbol&gt;</code> |

### get model

| Property | Return type |
| --------- | ------------- |
| `get model()` | `T` |

### get options

| Property | Return type |
| --------- | ------------- |
| `protected get options()` | `FormObjectOptions` |

### validators

Used for defining form field validators. Check [validating forms guide](../guides/validating-forms.md) for more details.

| Property | Return type |
| --------- | ------------- |
| `get validators()` | <code>Record&lt;string, ValidatorFn &#124; Array&lt;ValidatorFn&gt;&gt;</code> |
| `set validators()` | <code>Record&lt;string, ValidatorFn &#124; Array&lt;ValidatorFn&gt;&gt;</code> |

## Methods

### afterSave()

Implement this method to add custom behaviour after the model is saved. [Find out more](../guides/saving-forms.md#aftersave).

| Method | Return type |
| --------- | ------------- |
| `protected afterSave(model?: T, _form?: FormStore<T>)` | `Observable<T>` |

### beforeSave()

Implement this method to add custom behaviour before the actual saving is triggered. [Find out more](../guides/saving-forms.md#beforesave).

| Method | Return type |
| --------- | ------------- |
| `protected beforeSave(store: FormStore<T>)` | `Observable<FormStore<T>>` |

### getModelType()

By default, `getModelType(model)` will return `model.constructor.name`.

| Method | Return type |
| --------- | ------------- |
| `getModelType(model: T)` | `string` |

### getValidators()

Returns defined validators for provided attribute name.

| Method | Return type |
| --------- | ------------- |
| `getValidators(attributeName: string)` | <code>ValidatorFn &#124; Array&lt;ValidatorFn&gt;</code> |

### isFormValid()

Returns `true` if all enabled controls inside form are valid.

| Method | Return type |
| --------- | ------------- |
| `isFormValid(form: FormStore<T>)` | `boolean` |

### reset()

Resets provided `form` value to the `FormObject` `model` value.

| Method | Return type |
| --------- | ------------- |
| `reset(form: FormStore<T>)` | `void` |

### save()

Required method for saving the form. Override this method to persist the model. [Find out more](../guides/saving-forms.md#save).

| Method | Return type |
| --------- | ------------- |
| `protected save(model: T)` | `Observable<T>` |
