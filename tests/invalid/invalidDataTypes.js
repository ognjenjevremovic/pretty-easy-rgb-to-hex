"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  undefined
function undefinedValue() {
    describe('undefined value', function () {
        validate_1.invalidRGBValue_returnError('from undefined value');
        validate_1.invalidRGBValue_returnError('from undefined value', undefined);
    });
}
exports.undefinedValue = undefinedValue;
//  null
function nullValue() {
    describe('null value', function () {
        validate_1.invalidRGBValue_returnError('from null value', null);
    });
}
exports.nullValue = nullValue;
//  boolean
function booleanValue() {
    describe('boolean value', function () {
        validate_1.invalidRGBValue_returnError('from boolean value', true);
        validate_1.invalidRGBValue_returnError('from boolean balue', false);
    });
}
exports.booleanValue = booleanValue;
//  function
function functionValue() {
    describe('Function', function () {
        validate_1.invalidRGBValue_returnError('from function', function () { });
        validate_1.invalidRGBValue_returnError('from function', function () { return true; });
        validate_1.invalidRGBValue_returnError('from function', function () { return 'rgb(12, 12, 50)'; });
    });
}
exports.functionValue = functionValue;
//  instance of Date class
function dateObjectValue() {
    describe('instance of Date class', function () {
        validate_1.invalidRGBValue_returnError('from date object', new Date());
    });
}
exports.dateObjectValue = dateObjectValue;
//  instance of Error class
function errorObjectValue() {
    describe('instance of Error class', function () {
        validate_1.invalidRGBValue_returnError('from error object', new Error('invalid value'));
    });
}
exports.errorObjectValue = errorObjectValue;
//# sourceMappingURL=invalidDataTypes.js.map