import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
/** - To find the index of an element in a two-dimensional array. */
export declare function findIndexIn2DArray<T>(array: T[][], evaluate: (target: T) => boolean): number[] | null[];
/** - Get a specific property from a react native style object */
export declare function getStyle<T extends keyof ViewStyle>(style: StyleProp<ViewStyle>, property: T): ViewStyle[T] | undefined;
/** - Clamp a number value between `0` and a max value */
export declare function clamp(v: number, max: number): number;
/** - Convert `HSV` color to an `HSLA` string representation */
export declare function HSVA2HSLA_string(h: number, s: number, v: number, a?: number): string;
/** - Convert `HSV` color to an `RGBA` object representation */
export declare function HSVA2RGBA(h: number, s: number, v: number, a?: number): {
    r: number;
    g: number;
    b: number;
    a: number;
};
/** - Convert `RGBA` color to an `HSVA`  object representation */
export declare function RGBA2HSVA(r: number, g: number, b: number, a?: number): {
    h: number;
    s: number;
    v: number;
    a: number;
};
/** - Convert a decimal number to hexadecimal */
export declare function decimalToHex(a: number): string;
/** - Render children only if the `render` property is `true` */
export declare function ConditionalRendering({ children, render }: {
    children: React.ReactNode;
    render: boolean;
}): React.JSX.Element | null;
/** - Render children for native platforms only (Android, IOS) */
export declare function RenderNativeOnly({ children }: {
    children: React.ReactNode;
}): React.JSX.Element | null;
/** - Render children for Web platform only */
export declare function RenderWebOnly({ children }: {
    children: React.ReactNode;
}): React.JSX.Element | null;
export declare const isRtl: boolean;
export declare const isWeb: boolean;
//# sourceMappingURL=utils.d.ts.map