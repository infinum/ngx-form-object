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
var ExtendedFromArray = (function (_super) {
    __extends(ExtendedFromArray, _super);
    function ExtendedFromArray(controls, validator, asyncValidator) {
        var _this = _super.call(this, controls, validator, asyncValidator) || this;
        _this.initialValue = _this.value;
        return _this;
    }
    Object.defineProperty(ExtendedFromArray.prototype, "initialValue", {
        get: function () {
            return this._initialValue;
        },
        set: function (initialValue) {
            this._initialValue = [].concat(initialValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedFromArray.prototype, "currentValue", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedFromArray.prototype, "isChanged", {
        get: function () {
            var initialValue = this.initialValue === null ? undefined : this.initialValue;
            var currentValue = this.currentValue === null ? undefined : this.currentValue;
            if (initialValue.length !== currentValue.length) {
                return true;
            }
            // Both arrays are empty
            if (!initialValue.length && !currentValue.length) {
                return false;
            }
            var isSomethingChanged = this.controls.some(function (item) { return item && item['isChanged']; });
            if (isSomethingChanged) {
                return true;
            }
            var initialIds = initialValue.map(function (item) { return item ? item['id'] : null; }).filter(function (item) { return item; });
            var currentIds = currentValue.map(function (item) { return item ? item['id'] : null; }).filter(function (item) { return item; });
            var hasTheSameIds = initialIds.every(function (id) { return helpers_1.contains(currentIds, id); });
            return !hasTheSameIds;
        },
        enumerable: true,
        configurable: true
    });
    ExtendedFromArray.prototype.resetValue = function (value) {
        if (value === void 0) { value = this.currentValue; }
        this.initialValue = value;
        this.reset(value);
    };
    return ExtendedFromArray;
}(forms_1.FormArray));
exports.ExtendedFromArray = ExtendedFromArray;
