import type { IMenuList } from '../../components/Menu/Menu';
import { type FC } from 'react';
export interface IAsideLayout {
    /**
     * Nested list of links to render for the AsideLayout.<br />
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
/** A Bulma Menu as an Aside navigation with additional layout. */
declare const AsideLayout: FC<IAsideLayout>;
export default AsideLayout;
