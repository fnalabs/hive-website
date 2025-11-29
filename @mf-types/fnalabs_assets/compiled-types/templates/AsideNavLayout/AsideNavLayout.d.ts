import type { IMenuList } from '../../components/Menu/Menu';
import { type FC } from 'react';
export interface IAsideNavLayout {
    list: IMenuList[];
}
declare const AsideNavLayout: FC<IAsideNavLayout>;
export default AsideNavLayout;
