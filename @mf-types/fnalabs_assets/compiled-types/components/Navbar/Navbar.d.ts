import type { ButtonStyle, Color, FixedPosition, ILink } from '../../types';
import { FC } from 'react';
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
export declare const renderLink: (link: INavLink) => import("react/jsx-runtime").JSX.Element;
export declare const mapLinks: (link: INavLink) => import("react/jsx-runtime").JSX.Element;
export interface INavbar {
    brandLink: IBrandLink[];
    startLinks?: INavLink[];
    endLinks?: INavLink[];
    color?: Color;
    fixed?: FixedPosition;
    spaced?: boolean;
    shaded?: boolean;
}
declare const Navbar: FC<INavbar>;
export default Navbar;
