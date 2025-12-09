import type { GapSize, MinimumSize, NumericSize, GridNumericSizes } from '../../types';
import { FC, ReactNode } from 'react';
export interface IGrid {
    /** Child Cells to render in the Grid container. */
    children: ReactNode;
    /** Optional grid modifier for minimum column width. */
    minimumSize?: MinimumSize;
    /** Optional number of columns to set for the grid */
    columnCount?: NumericSize | GridNumericSizes[];
    /** Optional grid modifier for column gap size. */
    colGapSize?: GapSize;
    /** Optional grid modifier for row gap size. */
    rowGapSize?: GapSize;
    /** Optional grid modifier for Auto Count Fixed Grid experiences. */
    autoCount?: boolean;
    /** Optional grid modifier for Fixed Grid experiences. */
    fixed?: boolean;
}
/**
 * <strong>NOTE:</strong> Grid should only contain Cell children!
 */
declare const Grid: FC<IGrid>;
export default Grid;
