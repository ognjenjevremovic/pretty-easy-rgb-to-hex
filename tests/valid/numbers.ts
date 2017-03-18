//  Dependancies
import { validRGBValue_returnsString } from './validate';


//  number argument list - (red, green, blue)
export function rgbNumbesList() {
    describe('Number list (3 values)', () => {

        //  More info
        const info: string = 'from list of numbers (no alpha)';

        validRGBValue_returnsString(info, '007E8C', 0,   126, 140);
        validRGBValue_returnsString(info, '7DE818', 125, 232,  24);
        validRGBValue_returnsString(info, '441090', 68,   16, 144);
        validRGBValue_returnsString(info, 'CC0000', 204,   0,   0);
    });
}

//  number argument list - (red, green, blue, alpha)
export function rgbaNumbersList() {
    describe('Number list (4 values)', () => {

        //  More info
        const info: string = 'from list of numbers (alpha)';

        validRGBValue_returnsString(info, '007E8C', 0,   126, 140,   .5);
        validRGBValue_returnsString(info, '7DE818', 125, 232,  24, 0.75);
        validRGBValue_returnsString(info, '441090', 68,   16, 144,   42);
        validRGBValue_returnsString(info, 'CC0000', 204,   0,   0,   90);
    });
}
