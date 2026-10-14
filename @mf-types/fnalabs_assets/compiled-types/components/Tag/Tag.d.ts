import type { FC, ReactNode } from 'react';
import type { Color, GenericSize, TagType } from '../../types';
export interface ITag {
    children?: ReactNode;
    color?: Exclude<Color, 'text' | 'ghost'>;
    size?: Exclude<GenericSize, 'small' | 'fullheight'>;
    type?: TagType;
    href?: string;
    hover?: boolean;
    light?: boolean;
    rounded?: boolean;
    delete?: boolean;
    onClick?: () => void;
}
export declare const Tag: FC<ITag>;
export default Tag;
