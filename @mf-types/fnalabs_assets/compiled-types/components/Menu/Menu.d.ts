import type { ILink } from '../../types';
import { FC } from 'react';
export interface IMenuLink extends ILink {
    list?: IMenuLink[];
}
export interface IMenuList {
    label?: string;
    list: IMenuLink[];
}
export interface IMenu {
    /** Nested list of links to render for the Menu. */
    list: IMenuList[];
}
declare const Menu: FC<IMenu>;
export default Menu;
