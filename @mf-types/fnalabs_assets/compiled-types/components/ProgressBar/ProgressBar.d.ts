import type { Color, GenericSize } from '../../types';
import { type FC } from 'react';
export interface IProgressBar {
    color?: Exclude<Color, 'text' | 'ghost'>;
    size?: GenericSize;
    value?: number;
}
declare const ProgressBar: FC<IProgressBar>;
export default ProgressBar;
