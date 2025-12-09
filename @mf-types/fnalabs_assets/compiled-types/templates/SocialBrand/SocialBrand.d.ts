import type { ILink } from '../../types';
import { type FC } from 'react';
import { type IIcon } from '../../components/Icon/Icon';
import * as Icons from '../../components/Icon';
export interface ISocialLink extends ILink {
    name: IIcon['name'];
    style: IIcon['style'];
}
export interface ISocialBrand {
    brandIcon: keyof typeof Icons;
    brandSlogan?: string;
    socialLinks?: ISocialLink[];
}
declare const SocialBrand: FC<ISocialBrand>;
export default SocialBrand;
