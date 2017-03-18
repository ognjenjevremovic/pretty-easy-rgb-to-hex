"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests
var invalidDataTypes_1 = require("./invalidDataTypes");
var numbers_1 = require("./numbers");
var strings_1 = require("./strings");
var object_1 = require("./object");
//  Invalid data types
function dataTypes() {
    describe('Value passed is of invalid data type', function () {
        invalidDataTypes_1.undefinedValue(),
            invalidDataTypes_1.nullValue(),
            invalidDataTypes_1.booleanValue(),
            invalidDataTypes_1.functionValue(),
            invalidDataTypes_1.dateObjectValue(),
            invalidDataTypes_1.errorObjectValue();
    });
}
exports.dataTypes = dataTypes;
//  Invalid values
function invalidValues() {
    describe('Value passed is of invalid value', function () {
        numbers_1.invalidNumberValues();
        strings_1.invalidStringValues();
        object_1.invalidObjectValue();
    });
}
exports.invalidValues = invalidValues;
//# sourceMappingURL=index.js.map