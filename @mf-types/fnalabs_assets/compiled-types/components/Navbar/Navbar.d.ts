import type { ButtonStyle, Color, FixedPosition, ILink } from '../../types';
import { type FC } from 'react';
import * as Icons from '../Icon';
export interface INavLink extends ILink {
    list?: INavLink[];
    button?: boolean;
    color?: Color;
    divider?: boolean;
    beforeIcon?: string;
    afterIcon?: string;
    style?: ButtonStyle;
}
export interface IBrandLink extends ILink {
    brandIcon: keyof typeof Icons;
}
export declare const renderLink: (link: INavLink) => import("react").JSX.Element;
export declare const mapLinks: (link: INavLink) => import("react").JSX.Element;
export interface INavbar {
    /**
     * Brand links for the Navbar, including the brand icon and href. The first link is the primary brand, and the second link is an optional sub-brand.
     * <pre>
     * interface IBrandLink extends ILink {
     *   brandIcon: keyof typeof Icons
     * }
     * </pre>
     */
    brandLink: IBrandLink[];
    /**
     * Optional start links for the Navbar, which can include dropdowns, buttons, and dividers. Each link is an object that can have the following properties:
     * <pre>
     * interface INavLink extends ILink {
     *   list?: INavLink[]
     *   button?: boolean
     *   color?: Color
     *   divider?: boolean
     *   beforeIcon?: string
     *   afterIcon?: string
     *   style?: ButtonStyle
     * }
     * </pre>
     */
    startLinks?: INavLink[];
    /**
     * Optional end links for the Navbar, which can include dropdowns, buttons, and dividers. Each link is an object that can have the following properties:
     * <pre>
     * interface INavLink extends ILink {
     *   list?: INavLink[]
     *   button?: boolean
     *   color?: Color
     *   divider?: boolean
     *   beforeIcon?: string
     *   afterIcon?: string
     *   style?: ButtonStyle
     * }
     * </pre>
     */
    endLinks?: INavLink[];
    /** Optional background color for the Navbar. */
    color?: Exclude<Color, 'text' | 'ghost'>;
    /** Optional fixed position for the Navbar. */
    fixed?: FixedPosition;
    /** Optional spaced variant for the Navbar. */
    spaced?: boolean;
    /** Optional shaded variant for the Navbar. */
    shaded?: boolean;
}
declare const Navbar: FC<INavbar>;
export default Navbar;
