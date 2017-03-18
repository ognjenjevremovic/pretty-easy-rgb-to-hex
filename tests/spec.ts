//  Dependancies
import { invalidValues, dataTypes as invalidDataTypes } from './invalid';
import { validRGBAValues, validRGBValues } from './valid';


//  Test - Invalid value (Returns an instance Error class)
describe('Invalid data type passed', invalidDataTypes);

//  Test - Invalid value (Returns an instance Error class)
describe('Invalid value(s) passed', invalidValues);

//  Test - Valid hex color value (Returns an array)
describe('Valid RGB value(s) passed', validRGBValues);

//  Test - Valid hex color value (Returns an array)
describe('Valid RGBA value(s) passed', validRGBAValues);
