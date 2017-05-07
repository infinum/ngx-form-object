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
var helpers_1 = require("../helpers/helpers");
var ExtendedFormControl = (function (_super) {
    __extends(ExtendedFormControl, _super);
    function ExtendedFormControl(formState, validator, asyncValidator, isRelationship) {
        if (isRelationship === void 0) { isRelationship = false; }
        var _this = _super.call(this, formState, validator, asyncValidator) || this;
        _this.isRelationship = isRelationship;
        _this.initialValue = _this.value;
        return _this;
    }
    Object.defineProperty(ExtendedFormControl.prototype, "isChanged", {
        get: function () {
            var initialValue = this.initialValue === null ? undefined : this.initialValue;
            var currentValue = this.currentValue === null ? undefined : this.currentValue;
            if (this.isRelationship) {
                var initialId = initialValue ? initialValue.id : initialValue;
                var currentId = currentValue ? currentValue.id : currentValue;
                return initialId !== currentId;
            }
            return initialValue !== currentValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedFormControl.prototype, "currentValue", {
        get: function () {
            return helpers_1.isNumber(this.value) ? this.value.toString() : this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedFormControl.prototype, "initialValue", {
        get: function () {
            return this._initialValue;
        },
        set: function (value) {
            value = helpers_1.isNumber(value) ? value.toString() : value;
            this._initialValue = value;
        },
        enumerable: true,
        configurable: true
    });
    ExtendedFormControl.prototype.resetValue = function (value) {
        if (value === void 0) { value = this.currentValue; }
        this.initialValue = value;
        this.reset(value);
    };
    return ExtendedFormControl;
}(forms_1.FormControl));
exports.ExtendedFormControl = ExtendedFormControl;
