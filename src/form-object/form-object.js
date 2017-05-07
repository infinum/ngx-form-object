"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var forms_1 = require("@angular/forms");
var helpers_1 = require("../helpers/helpers");
var defaultModelOptions = {
    attributesTransformer: function (model) { return model.attributeProperties; },
    hasManyTransformer: function (model) { return model.hasManyProperties; },
    belongsToTransformer: function (model) { return model.belongsToProperties; },
    getConfig: function (model) { return model.config; },
};
var FormObject = (function () {
    function FormObject(model, options) {
        this.model = model;
        this.options = options;
        // For properties listed in this array, form fields won't be generated
        this.blacklistedProperties = [];
        this.validators = {};
        this.formGroupOptions = {};
        this._options = __assign({}, defaultModelOptions, options);
    }
    FormObject.prototype.beforeSave = function (store) {
        return Observable_1.Observable.of(store);
    };
    FormObject.prototype.afterSave = function (model, form) {
        return Observable_1.Observable.of(model);
    };
    Object.defineProperty(FormObject.prototype, "attributeProperties", {
        get: function () {
            var _this = this;
            var properties = this._options.attributesTransformer(this.model);
            return Object.keys(properties).filter(function (propertyName) {
                return !helpers_1.contains(_this.blacklistedProperties, propertyName);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormObject.prototype, "hasManyProperties", {
        get: function () {
            var _this = this;
            var properties = {};
            var hasManyProperties = this._options.hasManyTransformer(this.model) || [];
            hasManyProperties.forEach(function (property) {
                properties[property.propertyName] = property;
            });
            return Object.keys(properties).filter(function (propertyName) {
                return !helpers_1.contains(_this.blacklistedProperties, propertyName);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormObject.prototype, "belongsToProperties", {
        get: function () {
            var _this = this;
            var properties = {};
            var belongsTo = this._options.belongsToTransformer(this.model) || [];
            belongsTo.forEach(function (property) {
                properties[property.propertyName] = property;
            });
            return Object.keys(properties).filter(function (propertyName) {
                return !helpers_1.contains(_this.blacklistedProperties, propertyName);
            });
        },
        enumerable: true,
        configurable: true
    });
    FormObject.prototype.getModelType = function (model) {
        return this._options.getConfig(this.model.constructor).type;
    };
    FormObject.prototype.getValidators = function (attributeName) {
        var validators = this.validators[attributeName];
        if (validators && validators.length > 1) {
            return forms_1.Validators.compose(validators);
        }
        else {
            return validators;
        }
    };
    FormObject.prototype.reset = function (form) {
        this.rollbackAttributes(form);
        this.rollbackBelongsToRelationships(form);
        this.rollbackHasManyRelationships(form);
    };
    FormObject.prototype.mapPropertiesToModel = function (form) {
        var _this = this;
        this.attributeProperties.forEach(function (propertyName) {
            var formProperty = form.controls[propertyName];
            if (formProperty.isChanged) {
                var unmaskFunction = _this["unmask" + helpers_1.capitalize(propertyName)];
                var propertyValue = unmaskFunction
                    ? unmaskFunction.call(_this, formProperty.value)
                    : formProperty.value;
                _this.model[propertyName] = propertyValue;
            }
        });
    };
    FormObject.prototype.mapBelongsToPropertiesToModel = function (form) {
        var _this = this;
        this.belongsToProperties.forEach(function (propertyName) {
            var formProperty = form.controls[propertyName];
            if (formProperty.isChanged) {
                if (formProperty.formObject && formProperty.model && formProperty.model.id) {
                    _this.model[propertyName] = formProperty.model;
                }
                else {
                    _this.model[propertyName] = formProperty.value;
                }
            }
        });
    };
    FormObject.prototype.isFormValid = function (form) {
        return form.valid;
    };
    FormObject.prototype.save = function (form) {
        var _this = this;
        var form$ = new Rx_1.Subject();
        // TODO refactor in more rxjs way
        this._beforeSave(form).subscribe(function (validForm) {
            _this._save(validForm).subscribe(function (savedModel) {
                _this._afterSave(savedModel, validForm).subscribe(function (model) {
                    form$.next(model);
                });
            });
        });
        return form$;
    };
    FormObject.prototype.rollbackAttributes = function (form) {
        var _this = this;
        this.attributeProperties.forEach(function (propertyName) {
            var formProperty = form.controls[propertyName];
            var unmaskFunction = _this["mask" + helpers_1.capitalize(propertyName)];
            var propertyValue = unmaskFunction
                ? unmaskFunction.call(_this, _this.model[propertyName])
                : _this.model[propertyName];
            if (formProperty.isChanged) {
                formProperty.setValue(propertyValue);
            }
        });
    };
    FormObject.prototype.rollbackBelongsToRelationships = function (form) {
        var _this = this;
        this.belongsToProperties.forEach(function (propertyName) {
            var formProperty = form.controls[propertyName];
            if (formProperty.isChanged) {
                form.controls[propertyName].setValue(_this.model[propertyName]);
            }
        });
    };
    FormObject.prototype.rollbackHasManyRelationships = function (form) {
        var _this = this;
        this.hasManyProperties.forEach(function (propertyName) {
            var formProperty = form.controls[propertyName];
            var rollback = _this["rollback" + helpers_1.capitalize(propertyName)];
            if (rollback) {
                rollback.call(_this, propertyName, formProperty, form);
            }
        });
    };
    FormObject.prototype._beforeSave = function (form) {
        var _this = this;
        var form$ = this.beforeSave(form).flatMap(function (transformedForm) {
            _this.mapPropertiesToModel(transformedForm);
            _this.mapBelongsToPropertiesToModel(transformedForm);
            if (!_this.isFormValid(transformedForm)) {
                return Observable_1.Observable.create(function () {
                    return new Error('Form is not valid. Save aborted.');
                });
            }
            return Observable_1.Observable.of(transformedForm);
        });
        return form$;
    };
    FormObject.prototype._save = function (form) {
        var model$ = new Rx_1.Subject();
        var modelType = this.getModelType(this.model);
        var service = this.serviceMappings[modelType];
        if (!service) {
            console.warn("Service for " + modelType + " is not found in service mappings.");
        }
        service.save(this.model).subscribe(function (model) {
            model$.next(model);
        });
        return model$;
    };
    FormObject.prototype._afterSave = function (model, form) {
        var _this = this;
        var form$ = this.afterSave(model, form).flatMap(function (transformedModel) {
            _this.mapModelPropertiesToForm(transformedModel, form);
            _this.resetBelongsToFormControls(transformedModel, form);
            _this.resetHasManyFormControls(transformedModel, form);
            return Observable_1.Observable.of(transformedModel);
        });
        return form$;
    };
    FormObject.prototype.mapModelPropertiesToForm = function (model, form) {
        var _this = this;
        this.attributeProperties.forEach(function (propertyName) {
            var formControl = form.controls[propertyName];
            var maskFunction = _this["mask" + helpers_1.capitalize(propertyName)];
            var newInitialValue = model[propertyName];
            var maskedInitialValue = maskFunction ? maskFunction(newInitialValue) : newInitialValue;
            formControl.initialValue = maskedInitialValue;
            formControl.patchValue(maskedInitialValue);
        });
    };
    FormObject.prototype.resetBelongsToFormControls = function (model, form) {
        this.belongsToProperties.forEach(function (propertyName) {
            var formControl = form.controls[propertyName];
            if (formControl.resetValue) {
                formControl.resetValue();
            }
        });
    };
    FormObject.prototype.resetHasManyFormControls = function (model, form) {
        this.hasManyProperties.forEach(function (propertyName) {
            var formControl = form.controls[propertyName];
            if (formControl.resetValue) {
                formControl.resetValue();
            }
        });
    };
    return FormObject;
}());
exports.FormObject = FormObject;
