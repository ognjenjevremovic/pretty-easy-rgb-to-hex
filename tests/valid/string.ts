//  Dependancies
import { validRGBValue_returnsString } from './validate';


//  RGB string - 'rgb(red, green, blue)'
export function rgbString() {
    describe('RGB String', () => {

        //  More info
        const info: string = 'from RGB string';

        validRGBValue_returnsString(info, '007E8C', 'rgb(  0, 126, 140)');
        validRGBValue_returnsString(info, '7DE818', 'rgb(125, 232,  24)');
        validRGBValue_returnsString(info, '441090', 'rgb( 68,  16, 144)');
        validRGBValue_returnsString(info, 'CC0000', 'rgb(204,   0,   0)');
    });
}

//  RGB string - 'rgb(red, green, blue, alpha)'
export function rgbaString() {
    describe('RGBA String', () => {

        //  More info
        const info: string = 'from RGBA string';

        validRGBValue_returnsString(info, '007E8C', 'rgba(  0, 126, 140,   .5)');
        validRGBValue_returnsString(info, '7DE818', 'rgba(125, 232,  24, 0.75)');
        validRGBValue_returnsString(info, '441090', 'rgba( 68,  16, 144,   42)');
        validRGBValue_returnsString(info, 'CC0000', 'rgba(204,   0,   0,   90)');
    });
}
