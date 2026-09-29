import type { ILink } from '../../types';
import { type FC } from 'react';
import { type IIcon } from '../../components/Icon/Icon';
import * as Icons from '../../components/Icon';
export interface ISocialLink extends ILink {
    name: IIcon['name'];
    style: IIcon['style'];
}
export interface ISocialBrand {
    /** The icon representing the social brand. */
    brandIcon: keyof typeof Icons;
    /** Optional slogan for the social brand. */
    brandSlogan?: string;
    /**
     * Optional list of social links to render.<br />
     * <code>ISocialLink</code>
     * <pre>
     * interface ISocialLink extends ILink {
     *   name: IIcon['name']
     *   style: IIcon['style']
     * }
     * </pre>
     * <code>ILink</code>
     * <pre>
     * interface ILink {
     *   label: string
     *   href: string
     *   external?: boolean
     *   'aria-label'?: string
     * }
     * </pre>
     */
    socialLinks?: ISocialLink[];
}
declare const SocialBrand: FC<ISocialBrand>;
export default SocialBrand;
