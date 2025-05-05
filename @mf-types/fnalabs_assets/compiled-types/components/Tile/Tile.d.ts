import { NumericSize } from '../../types';
import { FC, ReactNode } from 'react';
type TileKind = 'ancestor' | 'parent' | 'child';
export interface ITile {
    /** Child content to render in the Tile. */
    children: ReactNode;
    centered?: boolean;
    centeredMobile?: boolean;
    className?: string;
    content?: boolean;
    kind?: TileKind;
    size?: NumericSize;
    vertical?: boolean;
}
declare const Tile: FC<ITile>;
export default Tile;
