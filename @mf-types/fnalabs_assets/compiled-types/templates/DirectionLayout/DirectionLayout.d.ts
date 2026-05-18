import type { ILink, Color } from '../../types';
import { type FC } from 'react';
export interface IDirectionLayout {
    links: {
        next?: ILink;
        prev?: ILink;
        up?: ILink;
    };
    color: Exclude<Color, 'text' | 'ghost'>;
}
declare const DirectionLayout: FC<IDirectionLayout>;
export default DirectionLayout;
