"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  RGB Object - IRGB interface
function rgbObject() {
    describe('RGB Object', function () {
        //  More info
        var info = 'from RGB Object';
        validate_1.validRGBValue_returnsString(info, '007E8C', { red: 0, green: 126, blue: 140 });
        validate_1.validRGBValue_returnsString(info, '7DE818', { red: 125, green: 232, blue: 24 });
        validate_1.validRGBValue_returnsString(info, '441090', { red: 68, green: 16, blue: 144 });
        validate_1.validRGBValue_returnsString(info, 'CC0000', { red: 204, green: 0, blue: 0 });
    });
}
exports.rgbObject = rgbObject;
//  RGBA Object - IRGB interface
function rgbaObject() {
    describe('RGBA Object', function () {
        //  More info
        var info = 'from RGBA Object';
        validate_1.validRGBValue_returnsString(info, '007E8C', { red: 0, green: 126, blue: 140, alpha: .5 });
        validate_1.validRGBValue_returnsString(info, '7DE818', { red: 125, green: 232, blue: 24, alpha: 0.75 });
        validate_1.validRGBValue_returnsString(info, '441090', { red: 68, green: 16, blue: 144, alpha: 42 });
        validate_1.validRGBValue_returnsString(info, 'CC0000', { red: 204, green: 0, blue: 0, alpha: 90 });
    });
}
exports.rgbaObject = rgbaObject;
//# sourceMappingURL=object.js.map