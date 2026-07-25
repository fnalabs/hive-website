import type { FC, ReactNode } from 'react';
import type { BreakpointContainer } from '../../types';
export interface IContainer {
    /** Child content to render in the Container. */
    children: ReactNode;
    /** Optional content flag to apply typography styles. */
    content?: boolean;
    size?: BreakpointContainer;
    fluid?: boolean;
}
declare const Container: FC<IContainer>;
export default Container;
