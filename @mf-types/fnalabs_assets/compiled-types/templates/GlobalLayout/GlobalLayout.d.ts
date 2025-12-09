import type { ILink } from '../../types';
import { FC } from 'react';
import { type ISocialBrand } from '../SocialBrand/SocialBrand';
export interface IGlobalLayout extends ISocialBrand {
    pageLinks: ILink[];
    policyLinks: ILink[];
}
declare const GlobalLayout: FC<IGlobalLayout>;
export default GlobalLayout;
