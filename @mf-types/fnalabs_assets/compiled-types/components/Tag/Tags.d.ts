import type { FC, ReactNode } from 'react';
import type { GenericSize } from '../../types';
export interface ITags {
    children: ReactNode;
    size?: Exclude<GenericSize, 'small' | 'fullheight'>;
    addons?: boolean;
}
declare const Tags: FC<ITags>;
export default Tags;
