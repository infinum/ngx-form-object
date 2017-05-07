"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// params: value - string
// returns a new string with first letter capitalized
function capitalize(value) {
    var capitalizedValue = value;
    if (value) {
        capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    }
    return capitalizedValue;
}
exports.capitalize = capitalize;
