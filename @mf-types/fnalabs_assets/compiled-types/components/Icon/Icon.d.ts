import type { FC, ReactNode } from 'react';
import type { GenericSize, Color } from '../../types';
export interface IIcon {
    /** Optional color for the Icon. */
    color?: Color;
    /** Optional Font Awesome name for the Icon. */
    name?: string;
    /** Optional Font Awesome style for the Icon. */
    style?: string;
    /** Optional size for the Icon. */
    size?: Exclude<GenericSize, 'normal' | 'fullheight'>;
    /** Optional child nodes for the Icon. */
    children?: ReactNode | string;
    /** Optional wrapper for a custom Icon. */
    wrapper?: boolean;
}
declare const Icon: FC<IIcon>;
export default Icon;
