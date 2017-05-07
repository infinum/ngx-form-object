"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var helpers_1 = require("../helpers/helpers");
var form_store_1 = require("../form-store/form-store");
var extended_form_control_1 = require("../extended-form-control/extended-form-control");
var extended_form_array_1 = require("../extended-form-array/extended-form-array");
var FormObjectBuilder = (function () {
    function FormObjectBuilder() {
        this.formBuilder = new forms_1.FormBuilder();
    }
    FormObjectBuilder.prototype.create = function (formObject) {
        var formFields = {};
        Object.assign(formFields, this.createAttributeFormFields(formObject));
        Object.assign(formFields, this.createHasManyFormFields(formObject));
        Object.assign(formFields, this.createBelongsToFormFields(formObject));
        var formStoreClass = formObject.formStoreClass ? formObject.formStoreClass : form_store_1.FormStore;
        var formStore = new formStoreClass(formFields, formObject.formGroupOptions.validator, formObject.formGroupOptions.asyncValidator);
        formStore.formObject = formObject;
        return formStore;
    };
    FormObjectBuilder.prototype.createAttributeFormFields = function (formObject) {
        var attributeFormFields = {};
        formObject.attributeProperties.forEach(function (attributeName) {
            var buildFunction = formObject["build" + helpers_1.capitalize(attributeName)];
            var validators = formObject.getValidators(attributeName);
            var maskFunction = formObject["mask" + helpers_1.capitalize(attributeName)];
            var originalFieldValue = formObject.model[attributeName];
            var fieldValue = maskFunction ? maskFunction(originalFieldValue) : originalFieldValue;
            attributeFormFields[attributeName] = buildFunction
                ? buildFunction()
                : new extended_form_control_1.ExtendedFormControl(fieldValue, validators);
        });
        return attributeFormFields;
    };
    FormObjectBuilder.prototype.createHasManyFormFields = function (formObject) {
        var _this = this;
        var hasManyFormFields = {};
        formObject.hasManyProperties.forEach(function (propertyName) {
            var buildFunction = formObject["build" + helpers_1.capitalize(propertyName)];
            var hasManyModels = formObject.model[propertyName];
            // Build function must return instance of ExtendedFromArray
            hasManyFormFields[propertyName] = buildFunction
                ? buildFunction.call(formObject, hasManyModels)
                : _this.buildRelationshipModels(formObject, propertyName, hasManyModels);
        });
        return hasManyFormFields;
    };
    FormObjectBuilder.prototype.createBelongsToFormFields = function (formObject) {
        var _this = this;
        var belongsToFormFields = {};
        formObject.belongsToProperties.forEach(function (propertyName) {
            var buildFunction = formObject["build" + helpers_1.capitalize(propertyName)];
            var belongsToModel = formObject.model[propertyName] || null;
            var validators = formObject.getValidators(propertyName);
            if (buildFunction) {
                belongsToFormFields[propertyName] = buildFunction.call(formObject);
            }
            else {
                belongsToFormFields[propertyName] = _this.createRelationshipFormObject(formObject, propertyName, belongsToModel);
                if (!belongsToFormFields[propertyName]) {
                    belongsToFormFields[propertyName] = new extended_form_control_1.ExtendedFormControl(belongsToModel, validators, null, true);
                }
            }
        });
        return belongsToFormFields;
    };
    FormObjectBuilder.prototype.buildRelationshipModels = function (formObject, relationshipName, relationshipModels) {
        var _this = this;
        if (relationshipModels === void 0) { relationshipModels = []; }
        var validators = formObject.getValidators(relationshipName);
        var formGroups = [];
        relationshipModels.forEach(function (relationshipModel) {
            var formStore = _this.createRelationshipFormObject(formObject, relationshipName, relationshipModel);
            if (formStore) {
                formGroups.push(formStore);
            }
        });
        var relationshipFormGroups = new extended_form_array_1.ExtendedFromArray(formGroups, validators);
        return relationshipFormGroups;
    };
    FormObjectBuilder.prototype.createRelationshipFormObject = function (formObject, relationshipName, relationshipModel) {
        var createFormObjectFunction = formObject["create" + helpers_1.capitalize(relationshipName) + "FormObject"];
        if (createFormObjectFunction) {
            var modelFormObject = createFormObjectFunction.call(formObject, relationshipModel, null);
            var formStore = this.create(modelFormObject);
            return formStore;
        }
        else {
            console.warn("There is no function specified for creating form object for " + relationshipName + ".");
        }
    };
    return FormObjectBuilder;
}());
exports.FormObjectBuilder = FormObjectBuilder;
