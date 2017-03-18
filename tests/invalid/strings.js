"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  number argument list - (red, green, blue)
function invalidStringValues() {
    describe('Invalid string values', function () {
        var info = 'from random string values';
        validate_1.invalidRGBValue_returnError(info, '-10', '126', '140');
        validate_1.invalidRGBValue_returnError(info, 'what', '232', '24');
        validate_1.invalidRGBValue_returnError(info, 'foo', 'bar', 'baz');
        validate_1.invalidRGBValue_returnError(info, '204', '0', '1000');
    });
}
exports.invalidStringValues = invalidStringValues;
//# sourceMappingURL=strings.js.map