"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_number_helper_1 = require("./is-number.helper");
describe('Helper - isNumber', function () {
    it('should return true if a number is provided', function () {
        var result = is_number_helper_1.isNumber(5);
        expect(result).toBe(true);
    });
    it('should return true if a negative number is provided', function () {
        var result = is_number_helper_1.isNumber(-5);
        expect(result).toBe(true);
    });
    it('should return false if a function is provided', function () {
        var testFn = function () { };
        var result = is_number_helper_1.isNumber(testFn);
        expect(result).toBe(false);
    });
    it('should return false if a string is provided', function () {
        var result = is_number_helper_1.isNumber('teststr');
        expect(result).toBe(false);
    });
    it('should return false if an object is provided', function () {
        var result = is_number_helper_1.isNumber({});
        expect(result).toBe(false);
    });
    it('should return false if undefined is provided', function () {
        var result = is_number_helper_1.isNumber(undefined);
        expect(result).toBe(false);
    });
    it('should return false if null is provided', function () {
        var result = is_number_helper_1.isNumber(null);
        expect(result).toBe(false);
    });
    it('should return false if "false" is provided', function () {
        var result = is_number_helper_1.isNumber(false);
        expect(result).toBe(false);
    });
    it('should return false if "true" is provided', function () {
        var result = is_number_helper_1.isNumber(true);
        expect(result).toBe(false);
    });
    it('should return false if NaN is provided', function () {
        var result = is_number_helper_1.isNumber(NaN);
        expect(result).toBe(false);
    });
});
