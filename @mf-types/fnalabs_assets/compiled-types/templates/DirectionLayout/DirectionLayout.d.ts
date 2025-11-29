import type { ILink, Color } from '../../types';
import { type FC } from 'react';
export interface IDirectionLayout {
    links: {
        next?: ILink;
        prev?: ILink;
        up?: ILink;
    };
    color: Color;
}
declare const DirectionLayout: FC<IDirectionLayout>;
export default DirectionLayout;
