import type { ButtonStyle, ButtonType, Color, GenericSize } from '../../types';
import { type FC, type ReactNode } from 'react';
export interface IButton {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    color?: Color;
    colorMode?: 'light' | 'dark';
    size?: Exclude<GenericSize, 'fullheight'>;
    style?: ButtonStyle;
    type?: ButtonType;
    beforeIcon?: string;
    afterIcon?: string;
    disabled?: boolean;
    external?: boolean;
    fullWidth?: boolean;
}
declare const Button: FC<IButton>;
export default Button;
