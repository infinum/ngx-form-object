"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var FormStore = (function (_super) {
    __extends(FormStore, _super);
    function FormStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FormStore.prototype, "isChanged", {
        get: function () {
            return this.attributesDidChange || this.belongsToPropertiesDidChange || this.hasManyPropertiesDidChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormStore.prototype, "formObject", {
        get: function () {
            return this._formObject;
        },
        set: function (formObject) {
            this._formObject = formObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormStore.prototype, "model", {
        get: function () {
            return this.formObject.model;
        },
        enumerable: true,
        configurable: true
    });
    FormStore.prototype.save = function () {
        return this.formObject.save(this);
    };
    Object.defineProperty(FormStore.prototype, "attributesDidChange", {
        get: function () {
            var _this = this;
            return this.formObject.attributeProperties.some(function (propertyName) { return _this.controls[propertyName]['isChanged']; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormStore.prototype, "belongsToPropertiesDidChange", {
        get: function () {
            var _this = this;
            return this.formObject.belongsToProperties.some(function (propertyName) { return _this.controls[propertyName]['isChanged']; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormStore.prototype, "hasManyPropertiesDidChange", {
        get: function () {
            var _this = this;
            return this.formObject.hasManyProperties.some(function (propertyName) { return _this.controls[propertyName]['isChanged']; });
        },
        enumerable: true,
        configurable: true
    });
    return FormStore;
}(forms_1.FormGroup));
exports.FormStore = FormStore;
