//  Dependancies
import { invalidRGBValue_returnError } from './validate';


//  number argument list - (red, green, blue)
export function invalidNumberValues() {
    describe('Invalid number values', () => {

        const info: string = 'from numbers greater than 255 or less than 0';

        invalidRGBValue_returnError(info, -10,  126,   140);
        invalidRGBValue_returnError(info, 3125, 232,    24);
        invalidRGBValue_returnError(info, 68,   -416,  144);
        invalidRGBValue_returnError(info, 204,    0,  1000);
    });
}
