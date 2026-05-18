import type { CellPositions } from '../../types';
import { FC, ReactNode } from 'react';
export interface ICell {
    /** Child Cells to render in the Cell container. */
    children: ReactNode;
    /** Optional cell modifier to override cell position. */
    cellPosition?: CellPositions;
}
/**
 * <strong>NOTE:</strong> Cell should only contain Cell children!
 */
declare const Cell: FC<ICell>;
export default Cell;
