import type { Color, GenericSize } from '../../types';
import type { FC, ReactNode } from 'react';
export interface IHero {
    /** Child content to render in the Hero. */
    children: ReactNode;
    /** Optional flag to toggle the bold experience. */
    bold?: boolean;
    /** Optional flag to center the content. */
    centered?: boolean;
    /** Optional custom CSS class name(s) to add to the Hero. */
    className?: string;
    /** Optional color setting for the Hero. */
    color?: Exclude<Color, 'text' | 'ghost'>;
    /** Optional footer content for the Hero. */
    footer?: ReactNode;
    /** Optional size setting for the Hero. */
    size?: GenericSize;
    /** Optional flag to accomodate for Navbar spacing. */
    withNavbar?: boolean;
}
declare const Hero: FC<IHero>;
export default Hero;
