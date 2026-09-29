import { FC, ReactNode } from 'react';
export interface IBox {
    /** Child content to render in the Box. */
    children: ReactNode;
    /** Optional box modifier for full height. */
    fullheight?: boolean;
}
declare const Box: FC<IBox>;
export default Box;
