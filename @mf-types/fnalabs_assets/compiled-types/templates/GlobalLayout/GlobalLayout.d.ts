import type { ILink } from '../../types';
import { FC } from 'react';
import { type ISocialBrand } from '../SocialBrand/SocialBrand';
export interface IGlobalLayout extends ISocialBrand {
    /**
     * Nested list of major links to render for the GlobalLayout.<br />
     * <code>ILink</code>
     * <pre>
     * interface ILink {
     *   href: string
     *   label: string
     * }
     * </pre>
     */
    pageLinks: ILink[];
    /**
     * Nested list of policy links to render for the GlobalLayout.<br />
     * <code>ILink</code>
     * <pre>
     * interface ILink {
     *   href: string
     *   label: string
     * }
     * </pre>
     */
    policyLinks: ILink[];
}
/** A foundational layout for the first layer of layout with a footer. */
declare const GlobalLayout: FC<IGlobalLayout>;
export default GlobalLayout;
