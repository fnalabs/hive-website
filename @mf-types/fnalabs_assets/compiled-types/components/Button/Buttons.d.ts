import { type FC, type ReactNode } from 'react';
import type { GenericSize, TextPosition } from '../../types';
export interface IButtons {
    children: ReactNode;
    position?: Exclude<TextPosition, 'left' | 'justified'>;
    size?: Exclude<GenericSize, 'normal' | 'fullheight'>;
    addons?: boolean;
}
export declare const Buttons: FC<IButtons>;
export default Buttons;
