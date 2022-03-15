---
id: validating-forms
title: Validating forms
sidebar_label: Validating forms
---

## Defining relationship validators

Relationship validators can be added by defining a `validators` object:

```ts title="user.form-object.ts"
import { Validators } from '@angular/forms';
...

validators: {
  name: Validators.required, // User must have a name
  cars: (carsControl: AbstractControl) => {
    return carsControl.value?.length >= 1 : null : { error: 'User must have at least 2 cars' };
  },
}
...
```
These validators will be passed to the corresponding `name` and `cars` form controls.

:::note
Validator object will be used only for `Attribute` and `HasMany` relationships. For validating `BelongsTo` relationships, see [FormGroupOptions](#defining-formobject-validator-with-formgroupoptions).
:::

## Defining FormObject validator with `FormGroupOptions`

To validate a `FormStore` instance as a whole, a validator can be provided via `formGroupOptions` on `FormObject`.
```ts title="interface FormGroupOptions"
export interface FormGroupOptions {
  validator?: ValidatorFn;
  asyncValidator?: AsyncValidatorFn;
}
```
For example the following validator will be set on the `UserFormStore`:
```ts title="user.form-object.ts"
   validator: (userForm: UserFormStore) => {
     // Validate your user form here
    },
```
