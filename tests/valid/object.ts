//  Dependancies
import { validRGBValue_returnsString } from './validate';


//  RGB Object - IRGB interface
export function rgbObject() {
    describe('RGB Object', () => {

        //  More info
        const info: string = 'from RGB Object';

        validRGBValue_returnsString(info, '007E8C', { red:   0, green: 126, blue: 140 });
        validRGBValue_returnsString(info, '7DE818', { red: 125, green: 232, blue:  24 });
        validRGBValue_returnsString(info, '441090', { red:  68, green:  16, blue: 144 });
        validRGBValue_returnsString(info, 'CC0000', { red: 204, green:   0, blue:   0 });
    });
}

//  RGBA Object - IRGB interface
export function rgbaObject() {
    describe('RGBA Object', () => {

        //  More info
        const info: string = 'from RGBA Object';

        validRGBValue_returnsString(info, '007E8C', { red:   0, green: 126, blue: 140, alpha:   .5 });
        validRGBValue_returnsString(info, '7DE818', { red: 125, green: 232, blue:  24, alpha: 0.75 });
        validRGBValue_returnsString(info, '441090', { red:  68, green:  16, blue: 144, alpha:   42 });
        validRGBValue_returnsString(info, 'CC0000', { red: 204, green:   0, blue:   0, alpha:   90 });
    });
}
