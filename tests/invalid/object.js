"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Dependancies
var validate_1 = require("./validate");
//  number argument list - (red, green, blue)
function invalidObjectValue() {
    describe('Invalid RGB(A) object', function () {
        var info = 'from invalid object values or properties';
        validate_1.invalidRGBValue_returnError(info, { foo: 'bar', baz: false });
        validate_1.invalidRGBValue_returnError(info, { red: false, green: 'no', tomorrow: 'sure' });
        validate_1.invalidRGBValue_returnError(info, { red: -1, green: 12, blue: 60, alpha: 20 });
        validate_1.invalidRGBValue_returnError(info, { red: 204, green: '-4', blue: 100 });
    });
}
exports.invalidObjectValue = invalidObjectValue;
//# sourceMappingURL=object.js.map