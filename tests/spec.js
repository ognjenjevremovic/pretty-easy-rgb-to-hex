"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var invalid_1 = require("./invalid");
var valid_1 = require("./valid");
//  Test - Invalid value (Returns an instance Error class)
describe('Invalid data type passed', invalid_1.dataTypes);
//  Test - Invalid value (Returns an instance Error class)
describe('Invalid value(s) passed', invalid_1.invalidValues);
//  Test - Valid hex color value (Returns an array)
describe('Valid RGB value(s) passed', valid_1.validRGBValues);
//  Test - Valid hex color value (Returns an array)
describe('Valid RGBA value(s) passed', valid_1.validRGBAValues);
//# sourceMappingURL=spec.js.map