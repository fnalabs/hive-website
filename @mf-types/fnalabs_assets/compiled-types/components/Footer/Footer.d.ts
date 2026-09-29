import { type FC, type ReactNode } from 'react';
export interface IFooter {
    /** Child content to render in the Footer. */
    children: ReactNode;
}
declare const Footer: FC<IFooter>;
export default Footer;
