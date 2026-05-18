import type { GenericSize } from '../../types';
import { type FC, type ReactNode } from 'react';
export interface IIcon {
    name?: string;
    style?: string;
    size?: Exclude<GenericSize, 'normal' | 'fullheight'>;
    children?: ReactNode | string;
    wrapper?: boolean;
}
declare const Icon: FC<IIcon>;
export default Icon;
