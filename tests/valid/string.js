"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  RGB string - 'rgb(red, green, blue)'
function rgbString() {
    describe('RGB String', function () {
        //  More info
        var info = 'from RGB string';
        validate_1.validRGBValue_returnsString(info, '007E8C', 'rgb(  0, 126, 140)');
        validate_1.validRGBValue_returnsString(info, '7DE818', 'rgb(125, 232,  24)');
        validate_1.validRGBValue_returnsString(info, '441090', 'rgb( 68,  16, 144)');
        validate_1.validRGBValue_returnsString(info, 'CC0000', 'rgb(204,   0,   0)');
    });
}
exports.rgbString = rgbString;
//  RGB string - 'rgb(red, green, blue, alpha)'
function rgbaString() {
    describe('RGBA String', function () {
        //  More info
        var info = 'from RGBA string';
        validate_1.validRGBValue_returnsString(info, '007E8C', 'rgba(  0, 126, 140,   .5)');
        validate_1.validRGBValue_returnsString(info, '7DE818', 'rgba(125, 232,  24, 0.75)');
        validate_1.validRGBValue_returnsString(info, '441090', 'rgba( 68,  16, 144,   42)');
        validate_1.validRGBValue_returnsString(info, 'CC0000', 'rgba(204,   0,   0,   90)');
    });
}
exports.rgbaString = rgbaString;
//# sourceMappingURL=string.js.map