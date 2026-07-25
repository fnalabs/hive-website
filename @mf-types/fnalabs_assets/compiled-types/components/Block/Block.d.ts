import { type FC, type ReactNode } from 'react';
export interface IBlock {
    /** Child content to render in the Block. */
    children: ReactNode;
    /** Optional prop for article element. */
    article?: boolean;
    /** Optional prop for content modifier. */
    content?: boolean;
}
declare const Block: FC<IBlock>;
export default Block;
