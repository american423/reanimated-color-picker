import React from 'react';
import type { InputProps } from '@types';
import type { StyleProp, TextStyle } from 'react-native';
type Props = {
    value: number | string;
    textKeyboard?: boolean;
    decimal?: boolean;
    title: string;
    inputStyle: StyleProp<TextStyle>;
    textStyle: StyleProp<TextStyle>;
    onBlur: () => void;
    onFocus: () => void;
    onChange: (text: string) => void;
    inputProps: InputProps;
};
export default function WidgetTextInput({ value, decimal, textKeyboard, title, inputStyle, textStyle, inputProps, onChange, onBlur, onFocus, }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=WidgetTextInput.d.ts.map