import type { SupportedColorFormats, ColorFormats, hslaT, hslT, hsvaT, hsvT, hwbaT, hwbT, rgbaT, rgbT } from './types';
export default class PrivateMethods {
    /** - Identify the color format of a given `string` or `object` */
    detectColorFormat(color: SupportedColorFormats): ColorFormats | null;
    /** - Get `RGB` or `RGBA` color values as an `object` */
    getRgbObject(color: string): rgbaT;
    /** - Convert an `RGB` or `RGBA` color to its corresponding `Hex` color */
    RGB_HEX(color: string | rgbaT | rgbT): string;
    /** - Convert an `RGB` or `RGBA` color to an `HSLA` object representation */
    RGB_HSLA(color: string | rgbaT | rgbT): hslaT;
    /** - Convert `RGB` or `RGBA` color to an `HSVA`  object representation */
    RGB_HSVA(color: string | rgbaT | rgbT): hsvaT;
    /** - Convert `RGB` or `RGBA` color to an `HWBA`  object representation */
    RGB_HWBA(color: string | rgbaT | rgbT): hwbaT;
    /** - Convert any `HEX` color to 8-digit `HEX` color (#rrggbbaa) */
    normalizeHexColor(color: string | number): string;
    /** - Convert any `HEX` color to an `RGBA` object representation */
    HEX_RGBA(color: string | number): rgbaT;
    /** - Convert any `HEX` color to an `HSVA` object representation */
    HEX_HSVA(color: string | number): hsvaT;
    /** - Convert any `HEX` color to an `HSLA` object representation */
    HEX_HSLA(color: string): hslaT;
    /** - Convert any `HEX` color to an `HWBA` object representation */
    HEX_HWBA(color: string): hwbaT;
    /** - Get `HSL` or `HSLA` color values as an `object` */
    getHslObject(color: string): hslaT;
    /** - Convert `HSL` or `HSLA` color to an `RGBA` object representation */
    HSL_RGBA(color: string | hslaT | hslT): rgbaT;
    /** - Convert `HSL` or `HSLA` color to `HEX` color */
    HSL_HEX(color: string | hslaT | hslT): string;
    /** - Convert `HSL` or `HSLA` color to an `HSVA` object representation */
    HSL_HSVA(color: string | hslaT | hslT): hsvaT;
    /** - Convert `HSL` or `HSLA` color to an `HWBA` object representation */
    HSL_HWBA(color: string | hslaT | hslT): hwbaT;
    /** - Get `HSV` or `HSVA` color values as an `object` */
    getHsvObject(color: string): hsvaT;
    /** - Convert `HSV` color to an `RGBA` object representation */
    HSV_RGBA(color: hsvaT | hsvT | string): rgbaT;
    /** - Convert `HSV` color to an `HSLA` object representation */
    HSV_HSLA(color: hsvaT | hsvT | string): hslaT;
    /** - Convert `HSV` color to an `Hex` color */
    HSV_HEX(color: hsvaT | hsvT | string): string;
    /** - Convert `HSV` color to an `HWBA` object representation */
    HSV_HWBA(color: hsvaT | hsvT | string): hwbaT;
    /** - Get `HWB` or `HWBA` color values as an `object` */
    getHwbObject(color: string): hwbaT;
    /** - Convert `HWB` or `HWBA` color to an `RGBA` object representation */
    HWB_RGBA(color: hwbaT | hwbT | string): rgbaT;
    /** - Convert `HWB` or `HWBA` color to an `Hex` color */
    HWB_HEX(color: hwbaT | hwbT | string): string;
    /** - Convert `HWB` or `HWBA` color to an `HSVA` object representation */
    HWB_HSVA(color: hwbaT | hwbT | string): hsvaT;
    /** - Convert `HWB` or `HWBA` color to an `HSLA` object representation */
    HWB_HSLA(color: hwbaT | hwbT | string): hslaT;
}
//# sourceMappingURL=PrivateMethods.d.ts.map