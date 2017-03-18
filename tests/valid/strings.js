"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  string argument list - ('red', 'green', 'blue')
function rgbStringList() {
    describe('String list (3 values)', function () {
        //  More info
        var info = 'from list of strings (no alpha)';
        validate_1.validRGBValue_returnsString(info, '007E8C', '0', '126', '140');
        validate_1.validRGBValue_returnsString(info, '7DE818', '125', '232', ' 24');
        validate_1.validRGBValue_returnsString(info, '441090', '68', '16', '144');
        validate_1.validRGBValue_returnsString(info, 'CC0000', '204', '0', '  0');
    });
}
exports.rgbStringList = rgbStringList;
//  string [numbers] argument list - (red, green, blue)
function rgbaStringList() {
    describe('String list (4 values)', function () {
        //  More info
        var info = 'from list of strings (alpha)';
        validate_1.validRGBValue_returnsString(info, '007E8C', '0', '126', '140', '.5');
        validate_1.validRGBValue_returnsString(info, '7DE818', '125', '232', ' 24', '0.75');
        validate_1.validRGBValue_returnsString(info, '441090', '68', '16', '144', '42');
        validate_1.validRGBValue_returnsString(info, 'CC0000', '204', '0', '  0', '90');
    });
}
exports.rgbaStringList = rgbaStringList;
//# sourceMappingURL=strings.js.map