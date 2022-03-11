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
* `HasMany` form field - An empty `ExtendedFormArray` will be created by default

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

### Create form fields using build{FieldName} method

If defined, this method will be used when building a form field for any model property or relationship decorated with `Attribute`, `BelongsTo` or `HasMany`.
This method must have a name formatted like `build{propertyName}` and return a `ExtendedFormControl`, `ExtendedFormArray` or `FormStore` instance. It receives property value as its argument.

For example, use `buildCars` to create cars form field:

```ts title="user.form-object.ts"
public buildCars(cars: Array<Car>): ExtendedFormArray {
  return new ExtendedFormArray(
    cars.map((car) => {
      return this.carService.createCarForm();;
    });
  );
}
```
This will result in `userForm.controls.cars` being an `ExtendedFormArray` populated with forms created in the service.

:::note
Depening on use case, car forms may be `FormGroup`, `FormStore<Car>` or even `FormControls`.
:::

Build method is useful when data manipulation for given property is needed. For example, `User` model can have assigned multiple `cars`, which may or may not be blue:

```ts title="user.model.ts"
import { Attribute, HasMany } from 'ngx-form-object';

class User {
  @Attribute()
  cars: Array<Car>;

  @Attribute()
  hasBlueCar: boolean;
}
```

Then, in user form object define `buildHasBlueCar`:

```ts title="user.form-object.ts"
public buildHasBlueCar(): ExtendedFormControl {
  const hasBlueCar = this.model.cars.some((car) => car.isBLue);
  return new ExtendedFormControl(hasBlueCar);
}
```
This will result in `userForm.controls.hasBlueCar` being an `ExtendedFormControl` populated with `boolean` value.

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

One example how you could use this hook is to save model relationships before the original model is saved.
For example, if you set `userForm.value.department` to a new department that does not yet exist in your database, then you  might want to save it before saving the `User` model. `beforeSave` hook could be used to achieve that.

```ts title="user.form-object.ts"
beforeSave(userForm: UserFormStore): Observable<UserFormStore> {
  return userForm.get('department').save().pipe(
    map(() => userForm)
  );
}
```

#### afterSave
Similarly to `beforeSave`, `afterSave` hook can be used to execute any action after the actual saving returned a value.

This method gets a `FormStore` instance as an argument and it should return an observable of the same class.

One example how you could use this hook is to save model relationships after the original model is saved.

```ts title="user.form-object.ts"
afterSave(user: User, userForm: UserFormStore): Observable<User> {
  return userForm.get('department').save().pipe(
    map(() => user)
  );
}
```
