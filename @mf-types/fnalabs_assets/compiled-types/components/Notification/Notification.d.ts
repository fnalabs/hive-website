import type { Color } from '../../types';
import { type FC, type ReactNode } from 'react';
export interface INotification {
    /** Content for the Notification experience. */
    children: ReactNode;
    /** Optional color for the Notification. */
    color?: Exclude<Color, 'text' | 'ghost'>;
    /** Optional light variant colors for the Notification. */
    light?: boolean;
    /** Optional close button for the Notification. */
    close?: boolean;
    /** Optional callback function for when the close button is clicked. */
    onClose?: () => void;
}
declare const Notification: FC<INotification>;
export default Notification;
