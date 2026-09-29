import type { FC } from 'react';
import { INavbar } from '../../components/Navbar/Navbar';
export interface IAppLayout extends INavbar {
}
/** A foundational layout for the first layer of layout with a main navigation using a Bulma Navbar. */
declare const AppLayout: FC<IAppLayout>;
export default AppLayout;
