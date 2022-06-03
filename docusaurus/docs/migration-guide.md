---
id: migration-guide
title: Migration guide
sidebar_label: Migration guide
---

# Migration guide

## Migration from v8.x.x to v9.x.x

### Saving a form

In the `v8` version, `service.save()` was called automatically.

From the version `v9`, the dependency to services is removed and instead of calling `service.save`, `formObject.save` is called.

The easiest way to migrate from `v8` to `v9` is to create `.save(model)` method in the form object and call `service.save` from there.

### Introducing generics

From the version `v9`, `FormObject` and `FormStore` use generics.

When extending `FormObject` or `FormStore` class model class must be provided. I.e. for `User` model - `FormObject<User>` and `FormStore<User>`.

### Method decorators

From the version `v9`, `build{propertyName}` is deprecated and decorator [@BuildControl](./api-reference/decorators.md#buildcontrol)
should be used for building other form structures, for example `ExtendedFormControl` instead of `ExtendedFormArray` for `HasMany` relationship.
From the version `v9`, `create{propertyName}FormObject` is deprecated and decorator [@BuildRelationshipFormObject](./api-reference/decorators.md#buildrelationshipformobjectpropertyname-string) should be used when creating nested form objects for any model properties decorated with `@BelongsTo` or `@HasMany` decorators.

### Deprecated methods

The `clear` method on `ExtendedFormArray` is renamed to `clearValue`. The method's behaviour didn't change.
