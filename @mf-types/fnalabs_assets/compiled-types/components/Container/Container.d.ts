import type { FC, ReactNode } from 'react';
import type { BreakpointContainer } from '../../types';
export interface IContainer {
    /** Child content to render in the Container. */
    children: ReactNode;
    /** Optional content flag to apply typography styles. */
    content?: boolean;
    /** Optional size for the Container. */
    size?: BreakpointContainer;
    /** Optional fluid variant to make the Container full width. */
    fluid?: boolean;
}
declare const Container: FC<IContainer>;
export default Container;
