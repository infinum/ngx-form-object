---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---
# NgxFormObject

## What is ngx-form-object?

`ngx-form-object` is an abstraction on top of Angular's reactive forms. It generates a form from given `model` and automatically handles creation of nested forms, ie. `HasOne` and `HasMany` model relationships.

## Benefits of using ngx-form-object

### Form (re)creation

`ngx-form-object` simplifies form creation and form manipulation. `FormObject` configuration for a specific `model` is defined in one place and reused across the application.

### Gathering validators

All validators for a single model can be listed inside `FormObject` instead of defining them in various components across the application.

### Unify model saving

Ensure that same procedure is executed each time when saving a model by using `beforeSave` and `afterSave` hooks.
