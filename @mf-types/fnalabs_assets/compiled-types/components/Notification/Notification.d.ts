import type { Color } from '../../types';
import { type FC, type ReactNode } from 'react';
export interface INotification {
    children: ReactNode;
    color?: Exclude<Color, 'text' | 'ghost'>;
    light?: boolean;
    close?: boolean;
    onClose?: () => {};
}
declare const Notification: FC<INotification>;
export default Notification;
