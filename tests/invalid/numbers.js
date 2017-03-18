"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  number argument list - (red, green, blue)
function invalidNumberValues() {
    describe('Invalid number values', function () {
        var info = 'from numbers greater than 255 or less than 0';
        validate_1.invalidRGBValue_returnError(info, -10, 126, 140);
        validate_1.invalidRGBValue_returnError(info, 3125, 232, 24);
        validate_1.invalidRGBValue_returnError(info, 68, -416, 144);
        validate_1.invalidRGBValue_returnError(info, 204, 0, 1000);
    });
}
exports.invalidNumberValues = invalidNumberValues;
//# sourceMappingURL=numbers.js.map