---
id: defining-relationship-form-fields
title: Defining relationship form fields
sidebar_label: Defining relationship form fields
---

`FormObjectBuilder` has a default behaviour for every type of form field relationship:

* `Attribute` form field - `ExtendedFormControl` will be created
* `BelongsTo` form field - `ExtendedFormControl` will be created
* `HasMany` form field - An empty `ExtendedFormArray` will be created

For example, for `User` model:

```ts title="user.model.ts"
import { Attribute, HasMany } from 'ngx-form-object';

class User {
  @Attribute()
  name: string;

  @BelongsTo()
  department: Department;

  @HasMany()
  cars: Array<Car>;
}
```

By default form will be created with:
- `name` form field as `ExtendedFormControl`
- `department` form field as `ExtendedFormControl`
- `cars` form field as `ExtendedFormArray` containing one `ExtendedFormControl` for every `Car` model.

If default form fields don't provide you with enough control (e.g. you are manipulating multiple levels of relationships on the same page/form), default behaviour can be overriden by implementing one of the following methods:

### Create relationship form fields using create{FieldName}FormObject method

If defined, this method will be used when creating a form field for any model relationship decorated with `BelongsTo` or `HasMany`.
This method must have a name formatted like `create{propertyName}FormObject` and return a `FormObject` instance. It receives model and form object options as its arguments. [Find out more](guides/form-creation-overrides.md#Override-creating-relationship-form-objects).

### Create form fields using build{FieldName} method

If defined, this method will be used when building a form field for any model property or relationship decorated with `Attribute`, `BelongsTo` or `HasMany`.
This method must have a name formatted like `build{propertyName}` and return a `ExtendedFormControl`, `ExtendedFormArray` or `FormStore` instance. It receives property value as its argument. [Find out more](guides/form-creation-overrides.md#Override-building-form-fields).
