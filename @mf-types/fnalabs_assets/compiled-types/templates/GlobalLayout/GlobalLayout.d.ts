import type { ILink } from '../../types';
import { FC } from 'react';
export interface IGlobalLayout {
    pageLinks: ILink[];
    policyLinks: ILink[];
}
declare const GlobalLayout: FC<IGlobalLayout>;
export default GlobalLayout;
