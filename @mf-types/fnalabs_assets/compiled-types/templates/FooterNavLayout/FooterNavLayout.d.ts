import type { ILink, Color } from '../../types';
import { type FC } from 'react';
export interface IFooterNavLayout {
    footerLinks: {
        next?: ILink;
        prev?: ILink;
        color: Color;
    };
}
declare const FooterNavLayout: FC<IFooterNavLayout>;
export default FooterNavLayout;
