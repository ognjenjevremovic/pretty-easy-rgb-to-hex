"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Tests
var numbers_1 = require("./numbers");
var strings_1 = require("./strings");
var object_1 = require("./object");
var string_1 = require("./string");
//  RGB Block
function validRGBValues() {
    describe('Value passed is a valid RGB color', function () {
        numbers_1.rgbNumbesList();
        strings_1.rgbStringList();
        object_1.rgbObject();
        string_1.rgbString();
    });
}
exports.validRGBValues = validRGBValues;
//  RGBA Block
function validRGBAValues() {
    describe('Value passed is a valid RGBA color', function () {
        numbers_1.rgbaNumbersList();
        strings_1.rgbaStringList();
        object_1.rgbaObject();
        string_1.rgbaString();
    });
}
exports.validRGBAValues = validRGBAValues;
//# sourceMappingURL=index.js.map