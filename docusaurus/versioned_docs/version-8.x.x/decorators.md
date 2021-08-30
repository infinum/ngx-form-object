---
id: decorators
title: Decorators
sidebar_label: Decorators
---

`ngx-form-object` exposes three decorators: `Attribute()`, `BelongsTo()`, and `HasMany()`.
You can use one of these decorators to specify what kind of form controls should `FormObjectbuilder` create for different model properties.

## Attribute()
`ExtendedFormControl`s will be created for model properties decorated with the `Attribute()` decorator.

## BelongsTo()
`ExtendedFormControl`s will be created for model properties decorated with the `BelongsTo()` decorator.

## HasMany()
Empty `ExtendedFormArray` will be created for model properties decorated with the `HasMany()` decorator.

You can override default control types in [FormObject](form-object.md).