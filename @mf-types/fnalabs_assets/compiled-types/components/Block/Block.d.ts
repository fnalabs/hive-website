import { type FC, type ReactNode } from 'react';
export interface IBlock {
    children: ReactNode;
    article?: boolean;
    content?: boolean;
}
declare const Block: FC<IBlock>;
export default Block;
