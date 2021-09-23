---
id: form-object
title: FormObject
sidebar_label: FormObject
---
FormObject lets you specify the way in which its FormStore relationship controls will be created.
It also enables you define specific 'save' behaviour by implementing 'beforeSave' and 'afterSave' hooks.

## Defining relationship form fields
`FormObjectBuilder` has a default behaviour for every type of form field relationship:

* `Attribute` form field - `ExtendedFormControl` will be created by default
* `BelongsTo` form field - `ExtendedFormControl` will be created by default
* `HasMany` form field - An empty `ExtendedFormArray` will be created

If default form fields don't provide you with enough control (e.g. you are manipulating multiple levels of relationships on the same page/form), default behaviour can be overriden by implementing one of the following methods:

### Create relationship form fields using create{FieldName}FormObject method

If defined, this method will be used when creating a form field for any model relationship decorated with `BelongsTo` or `HasMany`.
This method must have a name formatted like `create{propertyName}FormObject` and return a `FormObject` instance. It receives model and form object options as its arguments.

For example you can define the following method for a `User` model that has a `cars` `HasMany` relationship:
```ts title="user.form-object.ts"
public createCarsFormObject(model: Car, options: FormObjectOptions): CarFormObject {
  return new CarFormObject(model, options);
}
```
This will result in `userForm.controls.cars` being an `ExtendedFormArray` populated with `FormStores`. These `FormStores` will be created out of `CarFormObjects` that the `createCarsFormObject` method returned.

A similar method can be defined for `BelongsTo` relationships. You can define the following method for a `User` model that has a `Department` `BelongsTo` relationship:
```ts title="user.form-object.ts"
public createDepartmentFormObject(model: Department, options: FormObjectOptions): CarFormObject {
  return new DepartmentFormObject(model, options);
}
```
This results in `userForm.controls.department` being a `FormStore` created out of the `CarFormObject` instead of it being the default `ExtendedFormControl`.

:::note
`create<FieldName>FormObject` methods don't have to return specific `FormObjects` (e.g. `CarFormObject`). They can return the more generic `FormObject` if that is the level of control you need.
:::

## Defining relationship validators

You can add relationship validators by defining a `validators` object:

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
These validators will be passed to the corresponding `name` and `cars` relationship form controls.

:::note
Validator object will be used only for `Attribute` and `HasMany` relationships. For validating `BelongsTo` relationships, see [FormGroupOptions](#defining-formobject-validator-with-formgroupoptions).
:::

## Defining FormObject validator with `FormGroupOptions`

You can add `FormObject` validators by defining `formGroupOptions` on your `FormObject`.
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

## Saving forms
`ngx-form-object` handles saving and persisting of the form values. By calling `userForm.save()`, the `save` function on the form object is invoked:

```ts user.form-object.ts
public save(model: User): Observable<User> {
  // Persist your model here
}
```

### Save hooks
`ngx-form-object` provides three hooks that can be utilized to add additional functionalities to a saving process. The hooks will be executed one after another in the following order: `beforeSave`, `save`, `afterSave`.

#### beforeSave
Implement this method to execute any action before the actual saving is done. `beforeSave` method gets a `FormStore` instance as an argument and it should return an observable of the same `FormStore`.

One example how you could use this hook is to save model relationships before the original model is called.
For example, if you set `userForm.value.department` to a new department that does not yet exist in your database, then you  might want to save it before saving the `User` model. `beforeSave` hook could be used to achieve that.

```ts title="user.form-object.ts"
beforeSave(userForm: UserFormStore): Observable<UserFormStore> {
  return userForm.get('department').save().pipe(
    map((departmentForm: DepartmentFormStore) => {
      return userForm;
    })
  );
}
```

#### afterSave
Similarly to `beforeSave`, `afterSave` hook can be used to execute any action after the actual saving returned a value.

This method gets a `FormStore` instance as an argument and it should return an observable of the same class.
