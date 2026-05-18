import type { IMenuList } from '../../components/Menu/Menu';
import { type FC } from 'react';
export interface IAsideLayout {
    list: IMenuList[];
}
declare const AsideLayout: FC<IAsideLayout>;
export default AsideLayout;
