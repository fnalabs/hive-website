import type { FC, ReactNode } from 'react';
import type { BreakpointColumn, FractionSize, FractionSizes, NumericSize, NumericSizes, TextPosition, TextPositions } from '../../types';
export interface IColumn {
    /** Optional child content to display for the Column. */
    children?: ReactNode;
    /** Optional content class to apply to the Column. */
    content?: boolean;
    /**
     * Optional fraction size for the Column.<br />
     * <code>NOTE: Can only be used with fraction sizes offsets.</code>
     */
    fractionSize?: FractionSize | FractionSizes | Array<FractionSize | FractionSizes>;
    /**
     * Optional fraction size offset for the Column.<br />
     * <code>NOTE: Can only be used with fraction sizes.</code>
     */
    fractionSizeOffset?: FractionSize | FractionSizes | Array<FractionSize | FractionSizes>;
    /** Optional setting to hide the Column on touch devices. */
    hiddenTouch?: boolean;
    /**
     * Optional numeric size for the Column.<br />
     * <code>NOTE: Can only be used with numeric sizes offsets.</code>
     */
    numericSize?: NumericSize | NumericSizes | Array<NumericSize | NumericSizes>;
    /**
     * Optional numeric size offset for the Column.<br />
     * <code>NOTE: Can only be used with numeric sizes.</code>
     */
    numericSizeOffset?: NumericSize | NumericSizes | Array<NumericSize | NumericSizes>;
    /** Optional setting to make the Column narrow, or for certain breakpoints. */
    narrow?: boolean | BreakpointColumn[];
    /** Optional text position for the Column. */
    textPosition?: TextPosition | TextPositions | Array<TextPosition | TextPositions>;
}
declare const Column: FC<IColumn>;
export default Column;
