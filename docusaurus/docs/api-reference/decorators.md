---
id: decorators
title: Decorators
sidebar_label: Decorators
---

## Model decorators

`ngx-form-object` exposes three model decorators: `Attribute()`, `BelongsTo()`, and `HasMany()`.
You can use one of these decorators to specify what kind of form controls should `FormObjectbuilder` create for different model properties.

### @Attribute()

`ExtendedFormControl`s will be created for model properties decorated with the `Attribute(options: PropertyOptions)` decorator. See [PropertyOptions](#propertyoptions) for more information about the decorator options

### @BelongsTo(options: PropertyOptions)

`ExtendedFormControl`s will be created for model properties decorated with the `BelongsTo(options: PropertyOptions)` decorator. See [PropertyOptions](#propertyoptions) for more information about the decorator options

### @HasMany(options: PropertyOptions)

Empty `ExtendedFormArray` will be created for model properties decorated with the `HasMany(options: PropertyOptions)` decorator. See [PropertyOptions](#propertyoptions) for more information about the decorator options

### PropertyOptions

Each of the decorators accepts a `PropertyOptions` optional argument.

A custom `isChanged(initialValue: any, currentValue: any): boolean` function can be defined in the options argument. If defined, this function overrides the default `isChanged` behavior for that attribute.

You can override default control types in [FormObject](form-object.md).

## Method decorators

### @BuildControl(propertyName: string)

Requires relationship property name as an argument. Can be used for creating custom relationship forms. [Find out more](../guides/creating-complex-forms.md#creating-custom-relationship-forms).
