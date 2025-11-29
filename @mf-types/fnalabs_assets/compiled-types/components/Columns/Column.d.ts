import type { BreakpointColumn, FractionSize, FractionSizes, NumericSize, NumericSizes, TextPosition, TextPositions } from '../../types';
import { FC, ReactNode } from 'react';
export interface IColumn {
    children?: ReactNode;
    content?: boolean;
    fractionSize?: FractionSize | FractionSizes | Array<FractionSize | FractionSizes>;
    fractionSizeOffset?: FractionSize | FractionSizes | Array<FractionSize | FractionSizes>;
    hiddenTouch?: boolean;
    numericSize?: NumericSize | NumericSizes | Array<NumericSize | NumericSizes>;
    numericSizeOffset?: NumericSize | NumericSizes | Array<NumericSize | NumericSizes>;
    narrow?: boolean | BreakpointColumn[];
    textPosition?: TextPosition | TextPositions | Array<TextPosition | TextPositions>;
}
declare const Column: FC<IColumn>;
export default Column;
