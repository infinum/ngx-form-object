### 8.0.0-beta

  * [BREAKING CHANGE] Remove FormModel interface
  * Migrated to `@angular-cli`
    * Lib now requires Angular 8+ and Node 10+
    * Support for differential loading

### 7.1.0

  * Fixed empty objects comparison
  * Added `clear` method to `ExtendedFormArray`
  * Added `replaceWith` method to `ExtendedFormArray`

### 7.0.4

  * Code cleanup

### 7.0.3

  * Pass Form parameter when calling mask functions

### 7.0.2

  * Pass Form parameter when calling unmask functions

### 7.0.1

  * [BUGFIX] Complete save observable

### 7.0.0

  * Update dependencies

### 6.1.4

  * [BUGFIX] Fix form serialization while throwing an error

### 6.1.3

  * [BUGFIX] Throw an error in beforeSave
  * [BUGFIX] Mark form as valid if the whole form is disabled

### 6.1.2

  * Form save - fix throwing errors

### 6.1.1

  * Form save - catchError throws an error now

### 6.1.0

  * Improved form saving process

### 6.0.1

  * Passing down an array of validators instead of a single validator

### 6.0.0

  * [BREAKING CHANGE] Upgrade to rxjs 6

### 1.0.7

  * [BUGFIX] Fix nullable ids while comparing arrays

### 1.0.6

  * [BUGFIX] Handle nullable ids while comparing arrays

### 1.0.5

  * [BUGFIX] Fixed build functions

### 1.0.4

  * [BUGFIX] Fixed calculating isChanged in ExtendedFormArray

### 1.0.3

  * Passing validators to `build` functions

### 1.0.1

  * Update changelog

### 1.0.0

  * [BREAKING CHANGE] Model properties `attributeProperties`, `belongsToProperties`, `hasManyProperties` changed with `Attribute`, `BelongsTo`, and `HasMany` decorators
  * [BREAKING CHANGE] `blacklistedProperties` removed from FormObject
  * [BREAKING CHANGE] `ExtendedFromArray` renamed to `ExtendedFormArray`

### 0.2.8

  * Propagate errors from `beforeSave` and `afterSave`

### 0.2.7

  * Fix .resetValue method

### 0.2.5

  * Pass error outside of form object

### v0.2.4

  * Removed handling hasMany relationships after saving

### v0.2.3

  * Loosened FormObjectOptions interface
