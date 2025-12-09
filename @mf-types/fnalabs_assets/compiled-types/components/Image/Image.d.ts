import type { FixedSize, RatioSize } from '../../types';
import { type FC, type ReactNode } from 'react';
export interface IImage {
    children: ReactNode;
    fixedSize?: FixedSize;
    ratioSize?: RatioSize;
    centered?: boolean;
    hcentered?: boolean;
}
declare const Image: FC<IImage>;
export default Image;
