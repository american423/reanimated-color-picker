import type { ColorFormats, ConversionMethods, hslaT, hsvaT, hwbaT, rgbaT, SupportedColorFormats } from './types';
declare class Colors {
    private _;
    private returnColorObject;
    constructor();
    /** - Identify the color format of a given `string` or `object`, and return `null` for invalid colors. */
    getFormat(color: SupportedColorFormats): ColorFormats | 'named' | null;
    /** - Convert `HSL`, `HSLA`, `HSV`, `HSVA` or `HEX` color to `RGBA` color format. */
    RGB(color: SupportedColorFormats): {
        string: (alpha?: boolean) => string;
        array: () => number[];
        object: () => rgbaT;
    };
    /** - Convert `HSL`, `HSLA`, `HSV`, `HSVA`, `RGB` or `RGBA` color to `HEX` color format. */
    HEX(color: SupportedColorFormats): string;
    /** - Convert `HEX`, `HSV`, `HSVA`, `RGB` or `RGBA` color to `HSLA` color format. */
    HSL(color: SupportedColorFormats): {
        string: (alpha?: boolean) => string;
        array: () => number[];
        object: () => hslaT;
    };
    /** - Convert `HSL`, `HSLA`, `HEX`, `RGB` or `RGBA` color to `HSVA` color format. */
    HSV(color: SupportedColorFormats): {
        string: (alpha?: boolean) => string;
        array: () => number[];
        object: () => hsvaT;
    };
    /** - Convert `HSL`, `HSLA`, `HEX`, `RGB` or `RGBA` color to `HWBA` color format. */
    HWB(color: SupportedColorFormats): {
        string: (alpha?: boolean) => string;
        array: () => number[];
        object: () => hwbaT;
    };
    /** - Get the `red` channel value of a given color. */
    getRed(color: SupportedColorFormats): number;
    /** Set the `red` value of a color to a specific amount.*/
    setRed(color: SupportedColorFormats, amount: number): ConversionMethods;
    /** Increase the `red` value of a color by the given percentage/amount.
     * @example
     * increaseRed(''rgb(100, 100, 100)', 20).hex();
     * increaseRed('rgb(100, 100, 100)', '20%').rgb().string();
     */
    increaseRed(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** Decrease the `red` value of a color by the given percentage/amount
     * @example
     * decreaseRed('rgb(100, 100, 100)', 20).hex();
     * decreaseRed('rgb(100, 100, 100)', '20%').rgb().string();
     */
    decreaseRed(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** - Get the `green` channel value of a given color. */
    getGreen(color: SupportedColorFormats): number;
    /** - Set the `green` value of a color to a specific amount.*/
    setGreen(color: SupportedColorFormats, amount: number): ConversionMethods;
    /** Increase the `green` value of a color by the given percentage.
     * @example
     * increaseGreen('rgb(100, 100, 100)', 20).hex();
     * increaseGreen('rgb(100, 100, 100)', '20%').rgb().string();
     */
    increaseGreen(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** Decrease the `green` value of a color by the given percentage.
     * @example
     * decreaseGreen('rgb(100, 100, 100)', 20).hex();
     * decreaseGreen('rgb(100, 100, 100)', '20%').rgb().string();
     */
    decreaseGreen(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** - Get the `blue` channel value of a given color. */
    getBlue(color: SupportedColorFormats): number;
    /** - Set the `blue` value of a color to a specific amount.*/
    setBlur(color: SupportedColorFormats, amount: number): ConversionMethods;
    /** Increase the `blue` value of a color by the given percentage.
     * @example
     * increaseBlue('rgb(100, 100, 100)', 20).hex();
     * increaseBlue('rgb(100, 100, 100)', '20%').rgb().string();
     */
    increaseBlue(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** Decrease the `blue` value of a color by the given percentage.
     * @example
     * decreaseBlue('rgb(100, 100, 100)', 20).hex();
     * decreaseBlue('rgb(100, 100, 100)', '20%').rgb().string();
     */
    decreaseBlue(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** - Get the `hue` channel value of a given color. */
    getHue(color: SupportedColorFormats): number;
    /** - Set the `hue` value of a color to a specific amount.*/
    setHue(color: SupportedColorFormats, amount: number): ConversionMethods;
    /** Increase the `hue` value of a color by the given percentage/amount.
     * @example
     * increaseHue('rgb(100, 100, 100)', 20).hex();
     * increaseHue('rgb(100, 100, 100)', '20%').rgb().string();
     */
    increaseHue(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** Decrease the `hue` value of a color by the given percentage/amount.
     * @example
     * decreaseHue('rgb(100, 100, 100)', 20).hex();
     * decreaseHue('rgb(100, 100, 100)', '20%').rgb().string();
     */
    decreaseHue(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /**
     * - Spin the `hue` channel by a certain percentage/amount.
     * @example
     * spin('red', 20).hex();
     * spin('rgb(255, 0, 0)', '20%').rgb().string();
     */
    spin(color: SupportedColorFormats, degree: number | string): ConversionMethods;
    /** - Get the `saturation` value of a given color. */
    getSaturation(color: SupportedColorFormats): number;
    /** - Set the `saturation` value of a color to a specific amount.*/
    setSaturation(color: SupportedColorFormats, amount: number): ConversionMethods;
    /**
     * - Increase the saturation of the given color by a certain percentage/amount.
     * @example
     * saturate('red', 20).hex();
     * saturate('rgb(255, 0, 0)', '20%').rgb().string();
     */
    saturate(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /**
     * - Decrease the saturation of the given color by a certain percentage/amount.
     * @example
     * saturate('red', 20).hex();
     * saturate('rgb(255, 0, 0)', '20%').rgb().string();
     */
    desaturate(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** - Get color's HSL `luminosity` channel value.
     * - If you want the overall `luminosity` of a color use `getLuminanceWCAG` method.
     */
    getLuminance(color: SupportedColorFormats): number;
    /** - Set HSL's `luminosity` channel for a given color to a specific amount.*/
    setLuminance(color: SupportedColorFormats, amount: number): ConversionMethods;
    /**
     * - Increase the brightness of the given color by a certain percentage/amount.
     * @example
     * brighten('red', 20).hex();
     * brighten('rgb(255, 0, 0)', '20%').rgb().string();
     */
    brighten(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /**
     * - Decrease the brightness of the given color by a certain percentage/amount.
     * @example
     * darken('red', 20).hex();
     * darken('rgb(255, 0, 0)', '20%').rgb().string();
     */
    darken(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** - Get the HSV's `value` (brightness) channel value of a given color. */
    getBrightness(color: SupportedColorFormats): number;
    /** - Set HSV's `value` (brightness) channel for a given color to a specific amount.*/
    setBrightness(color: SupportedColorFormats, amount: number): ConversionMethods;
    /** Increase HSV's `value` (brightness) channel value of a color by the given percentage/amount.*/
    increaseBrightness(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** Decrease HSV's `value` (brightness) channel value of a color by the given percentage/amount.*/
    decreaseBrightness(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** - Get the `alpha` value of a given color. */
    getAlpha(color: SupportedColorFormats): number;
    /** - Set the `alpha` value of a color to a specific amount.*/
    setAlpha(color: SupportedColorFormats, amount: number): ConversionMethods;
    /** Increase the `alpha` value of a color by the given percentage.*/
    increaseAlpha(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** Decrease the `alpha` value of a color by the given percentage.*/
    decreaseAlpha(color: SupportedColorFormats, amount: number | string): ConversionMethods;
    /** - Returns the perceived `luminance` of a color, from `0-1` as defined by Web Content Accessibility Guidelines (Version 2.0). */
    getLuminanceWCAG(color: SupportedColorFormats): number;
    /** - Calculates the contrast ratio between two colors, useful for ensuring accessibility and readability. */
    contrastRatio(color1: SupportedColorFormats, color2: SupportedColorFormats): number;
    /** - Returns a boolean indicating whether the color is considered "dark" or not */
    isDark(color: SupportedColorFormats): boolean;
    /** - Returns a boolean indicating whether the color is considered "light" or not */
    isLight(color: SupportedColorFormats): boolean;
    /**
     * - Check if two colors are similar within a specified tolerance.
     * @example
     * const tolerance = 0;
     * const isEqual = colorKit.areColorsEqual("#F00", "red", tolerance); // true
     */
    areColorsEqual(color1: SupportedColorFormats, color2: SupportedColorFormats, tolerance?: number): boolean;
    /**
     * - Blends two colors by a certain amount.
     * @example
     * blend('yellow', 'red', 50).hex(); // #ff8000
     */
    blend(color1: SupportedColorFormats, color2: SupportedColorFormats, percentage: number): ConversionMethods;
    /** - Invert (negate) a color, black becomes white, white becomes black, blue becomes orange and so on. */
    invert(color: SupportedColorFormats): ConversionMethods;
    /** - Completely desaturate a color into grayscale. */
    grayscale(color: SupportedColorFormats): ConversionMethods;
    /** - Generate a random color from `HSL` values. */
    randomHslColor({ h, s, l, a }?: {
        h?: number[] | undefined;
        s?: number[] | undefined;
        l?: number[] | undefined;
        a?: number[] | undefined;
    }): ConversionMethods;
    /** - Generate a random color from `HSV` values. */
    randomHsvColor({ h, s, v, a }?: {
        h?: number[] | undefined;
        s?: number[] | undefined;
        v?: number[] | undefined;
        a?: number[] | undefined;
    }): ConversionMethods;
    /** - Generate a random color from `RGB` values. */
    randomRgbColor({ r, g, b, a }?: {
        r?: number[] | undefined;
        g?: number[] | undefined;
        b?: number[] | undefined;
        a?: number[] | undefined;
    }): ConversionMethods;
    /** - Generate a random color from `HWB` values. */
    randomHwbColor({ h, w, b, a }?: {
        h?: number[] | undefined;
        w?: number[] | undefined;
        b?: number[] | undefined;
        a?: number[] | undefined;
    }): ConversionMethods;
    /** - Returns the first color with the desired contrast ratio against the second color */
    adjustContrast(color1: SupportedColorFormats, color2: SupportedColorFormats, ratio?: number): ConversionMethods;
}
declare const colorKit: Colors;
export default colorKit;
//# sourceMappingURL=colorKit.d.ts.map