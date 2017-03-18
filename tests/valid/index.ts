//  Tests
import { rgbNumbesList, rgbaNumbersList } from './numbers';
import { rgbStringList, rgbaStringList } from './strings';
import { rgbObject, rgbaObject } from './object';
import { rgbString, rgbaString } from './string';


//  RGB Block
export function validRGBValues() {
    describe('Value passed is a valid RGB color', () => {
        rgbNumbesList();
        rgbStringList();
        rgbObject();
        rgbString();
    });
}

//  RGBA Block
export function validRGBAValues() {
    describe('Value passed is a valid RGBA color', () => {
        rgbaNumbersList();
        rgbaStringList();
        rgbaObject();
        rgbaString();
    });
}
