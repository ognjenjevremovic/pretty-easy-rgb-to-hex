//  Dependancies
import { IRGB } from './irgb';


/**
 * @description
 *  Main module interface
 *  defining accepted parameters
 *  of type string, number and IRGB
 *
 * @export
 * @interface IModule
 */
export interface IModule {
    (...args: Array<string | number | IRGB>) : string | Error;
}
