import type { FC, ReactNode } from 'react';
import type { FixedSize, RatioSize } from '../../types';
export interface IImage {
    /** The HTML img tag for the image you want to display. */
    children: ReactNode;
    /** Optional fixed size for the image. */
    fixedSize?: FixedSize;
    /** Optional ratio size for the image. */
    ratioSize?: RatioSize;
    /** Whether the image should be centered horizontally and vertically. */
    centered?: boolean;
    /** Whether the image should be centered horizontally. */
    hcentered?: boolean;
}
declare const Image: FC<IImage>;
export default Image;
