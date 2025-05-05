import { FC, ReactNode } from 'react';
export interface IContainer {
    /** Child content to render in the Container. */
    children: ReactNode;
    /** Optional content flag to apply typography styles. */
    content?: boolean;
}
declare const Container: FC<IContainer>;
export default Container;
