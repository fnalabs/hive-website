import type { Color, GenericSize } from '../../types';
import { type FC } from 'react';
export interface IProgressBar {
    /** Optional color for the progress bar. */
    color?: Exclude<Color, 'text' | 'ghost'>;
    /** Optional size for the progress bar. */
    size?: GenericSize;
    /** Optional value for the progress bar (0-100) when not indeterminate. */
    value?: number;
}
declare const ProgressBar: FC<IProgressBar>;
export default ProgressBar;
