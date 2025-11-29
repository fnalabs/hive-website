import { FC, ReactNode } from 'react';
export interface IBox {
    /** Child Columns to render in the Columns container. */
    children: ReactNode;
}
declare const Box: FC<IBox>;
export default Box;
