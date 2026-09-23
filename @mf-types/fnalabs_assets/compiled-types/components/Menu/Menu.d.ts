import type { ILink } from '../../types';
import type { FC } from 'react';
export interface IMenuLink extends ILink {
    external?: boolean;
    list?: IMenuLink[];
}
export interface IMenuList {
    label?: string;
    list: IMenuLink[];
}
export interface IMenu {
    /**
     * Nested list of links to render for the Menu.<br />
     * <code>IMenuList</code>
     * <pre>
     * interface IMenuList {
     *  label?: string
     *   list: IMenuLink[]
     * }
     * </pre>
     * <code>IMenuLink</code>
     * <pre>
     * interface IMenuLink extends ILink {
     *   external?: boolean
     *   list?: IMenuLink[]
     * }
     * </pre>
     */
    list: IMenuList[];
}
declare const Menu: FC<IMenu>;
export default Menu;
