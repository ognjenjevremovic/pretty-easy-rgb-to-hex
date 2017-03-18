//  Dependancies
import { invalidRGBValue_returnError } from './validate';


//  number argument list - (red, green, blue)
export function invalidStringValues() {
    describe('Invalid string values', () => {

        const info: string = 'from random string values';

        invalidRGBValue_returnError(info, '-10',  '126',   '140');
        invalidRGBValue_returnError(info, 'what', '232',    '24');
        invalidRGBValue_returnError(info, 'foo',   'bar',  'baz');
        invalidRGBValue_returnError(info, '204',    '0',  '1000');
    });
}
