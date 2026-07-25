import type { ButtonStyle, ButtonType, Color, GenericSize, States } from '../../types';
import { type FC, type ReactNode } from 'react';
export interface IButton {
    /** Child content to render in the Button. */
    children: ReactNode;
    /** Optional click handler for the Button. */
    onClick?: () => void;
    /** Optional href for the Button to render as a link. */
    href?: string;
    /** Optional label for the Button to provide additional context for screen readers. */
    label?: string;
    /** Optional color for the Button. */
    color?: Color;
    /** Optional color mode for the Button. */
    colorMode?: 'light' | 'dark';
    /** Optional selected state for the Button. */
    selected?: boolean;
    /** Optional size for the Button. */
    size?: Exclude<GenericSize, 'fullheight'>;
    /** Optional state for the Button. */
    state?: States;
    /** Optional style for the Button. */
    style?: ButtonStyle;
    /** Optional type for the Button. */
    type?: ButtonType;
    /** Optional icon to render before the Button content. */
    beforeIcon?: string;
    /** Optional icon to render after the Button content. */
    afterIcon?: string;
    /** Optional disabled state for the Button. */
    disabled?: boolean;
    /** Optional external link state for the Button. */
    external?: boolean;
    /** Optional full width state for the Button. */
    fullWidth?: boolean;
}
declare const Button: FC<IButton>;
export default Button;
