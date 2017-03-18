//  Dependancies
import { invalidRGBValue_returnError } from './validate';


//  number argument list - (red, green, blue)
export function invalidObjectValue() {
    describe('Invalid RGB(A) object', () => {

        const info: string = 'from invalid object values or properties';

        invalidRGBValue_returnError(info, { foo: 'bar', baz: false });
        invalidRGBValue_returnError(info, { red: false, green: 'no', tomorrow: 'sure'});
        invalidRGBValue_returnError(info, { red: -1,    green: 12,   blue: 60, alpha: 20});
        invalidRGBValue_returnError(info, { red: 204,   green: '-4', blue: 100});
    });
}
