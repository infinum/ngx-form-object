---
id: decorators
title: Decorators
sidebar_label: Decorators
---

`ngx-form-object` exposes three decorators: `Attribute()`, `BelongsTo()`, and `HasMany()`.
You can use one of these decorators to specify what kind of form controls should `FormObjectbuilder` create for different model properties.

## Attribute()

* `ExtendedFormControl`s will be created for model properties decorated with the `Attribute(options: PropertyOptions)` decorator.
* See [PropertyOptions](#propertyoptions) for more information about the decorator options

## BelongsTo(options: PropertyOptions)

* `ExtendedFormControl`s will be created for model properties decorated with the `BelongsTo(options: PropertyOptions)` decorator.
* See [PropertyOptions](#propertyoptions) for more information about the decorator options

## HasMany(options: PropertyOptions)

* Empty `ExtendedFormArray` will be created for model properties decorated with the `HasMany(options: PropertyOptions)` decorator.
* See [PropertyOptions](#propertyoptions) for more information about the decorator options

## PropertyOptions

Each of the decorators accepts a `PropertyOptions` optional argument.

`PropertyOptions`:
  * `isChanged(initialValue: any, currentValue: any, formControl: ExtendedFormControl | ExtendedFormArray): boolean`
    * function can be defined in the options argument
    * if defined, this function overrides the default `isChanged` behavior for that attribute
    * arguments:
      * `initialValue` - the raw value of the array at the creation of the `ExtendedFormArray`/`ExtendedFormControl` control
      * `currentValue` - the current raw value of the array
      * `formControl` - the instance of the decorated `ExtendedFormControl` or `ExtendedFormArray`

You can override default control types in [FormObject](form-object.md).
