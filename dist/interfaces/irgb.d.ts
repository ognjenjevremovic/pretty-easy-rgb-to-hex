/**
 * @description
 *  IRGB object passed
 *  should include red, green, blue, alpha? properties
 *  with values of type of string or number
 *
 * @export
 * @interface IRGB
 */
export interface IRGB {
    red: string | number;
    green: string | number;
    blue: string | number;
    alpha?: string | number;
}
