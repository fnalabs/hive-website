import { FC } from 'react';
import { INavbar } from '../../components/Navbar/Navbar';
export interface IAppLayout extends INavbar {
}
declare const AppLayout: FC<IAppLayout>;
export default AppLayout;
