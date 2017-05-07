"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_helper_1 = require("./capitalize.helper");
describe('Helper - capitalize', function () {
    it('should return a string with first letter capitalized', function () {
        var testString = 'test';
        var expectedString = 'Test';
        var result = capitalize_helper_1.capitalize(testString);
        expect(result).toBe(expectedString);
    });
    it('should return unchanged string if the first character is not a letter', function () {
        var testString = '1test';
        var result = capitalize_helper_1.capitalize(testString);
        expect(result).toBe(testString);
    });
});
