---
id: creating-complex-forms
title: Creating complex forms
sidebar_label: Creating complex forms
---

`ngx-form-object` exposes two methods for modifying form creation. Both can be used for creating complex relationship structures.

`create{propertyName}FormObject` should be used to define a `FormObject` by which `FormStore` or `ExtendedFormArray` filled with `FormStore` instances will be created.

`build{propertyName}` should be used for building other form structures, for example `ExtendedFormControl` instead of `ExtendedFormArray` for `HasMany` relationship.

## Creating complex relationship structures

Use `create{propertyName}FormObject` for creating nested forms. For example, two related models could be defined as follows:

### Example 1: Create complex form structure for `BelongsTo` relationship

```ts title="user.model.ts"
import { BelongsTo } from 'ngx-form-object';

class User {
  @BelongsTo()
  address: Address;
}
```

```ts title="address.model.ts"
import { Attribute } from 'ngx-form-object';

class Address {
  @Attribute()
  street: string;
}
```

By default, `userForm.get('address')` will be created as `ExtendedFormControl` with `Address` model set as a value.

In order to have a nested form and to be able to edit `street` property, `userForm.get('address')` should be a `FormGroup` (or `FormStore`) containing `ExtendedFromControl` for `street` form field.

To achive that, a create method has to be implemented in `UserFormObject`. This method must be decorated with `@BuildRelationshipFormObject` decorator and return a `FormObject` instance. It receives a model and form object options as its arguments.

```ts title="user.form-object.ts"
import { BuildRelationshipFormObject } from 'ngx-form-object';

@BuildRelationshipFormObject('address')
public createAddressFormObject(model: Address, options: FormObjectOptions): AddressFormObject {
  return new AddressFormObject(model, options);
}
```
This results in `userForm.get('address')` being a `FormStore` created out of the `AddressFormObject`. The created form store contains `street` property as `ExtendedFormControl`.

### Example 2: Create complex form structure for `HasMany` relationship

A similar method can be defined for `HasMany` relationships. Example:

```ts title="user.model.ts"
import { HasMany } from 'ngx-form-object';

class User {
  @HasMany()
  cars: Array<Car>;
}
```

```ts title="car.model.ts"
import { Attribute } from 'ngx-form-object';

class Car {
  @Attribute()
  color: string;
}
```

Create form object method is then implemented in `UserFormObject`:

```ts title="user.form-object.ts"
import { BuildRelationshipFormObject } from 'ngx-form-object';

@BuildRelationshipFormObject('cars')
public createCarsFormObject(model: Car, options: FormObjectOptions): CarFormObject {
  return new CarFormObject(model, options);
}
```
For each `Car` model, `FormStore` will be created with `CarFormObjects` returned by this method. This will result in `userForm.get('cars')` being an `ExtendedFormArray` populated with this `FormStores`.

:::note
Methods decorated with `@BuildRelationshipFormObject` decorator don't have to return specific `FormObjects` (e.g. `CarFormObject`). They can return the more generic `FormObject` if that is the needed level of control.
:::

## Creating custom relationship forms

Use `@BuildControl` decorator for creating custom relationship forms. This method should return an `ExtendedFormControl`, `ExtendedFormArray` or a `FormStore` instance. It receives property value as its argument.

For example, use `@BuildControl` to create cars form field:

```ts title="user.form-object.ts"
import { BuildControl } from 'ngx-form-object';

@BuildControl('cars')
public buildCarsForm(cars: Array<Car>): ExtendedFormArray {
  return new ExtendedFormArray(
    cars.map((car) => {
      return this.carService.createCarFormGroup();;
    });
  );
}
```
This will result in `userForm.get('cars')` being an `ExtendedFormArray` populated with forms created in the service.

:::note
Depending on a use case, `car` forms may be `FormGroup`, `FormStore<Car>` or even a simple `FormControl`. For creation of `FormArray` containing `FormStore` instances rather use [create method override](#creating-complex-relationship-structures).
:::

Defining method decorated with `@BuildControl` is also useful for defining type of a form field. For example, create `ExtendedFormControl` instead of default `ExtendedFromArray` for `HasMany` relationships.

```ts title="user.form-object.ts"
import { BuildControl } from 'ngx-form-object';

@BuildControl('cars')
public buildCarsForm(cars: Array<Car>): ExtendedFormControl {
  return new ExtendedFormControl(cars);
}
```
This will result in `userForm.get('cars')` being an `ExtendedFormControl` with value set to array of `Car` models.
