import type { GenericSize } from '../../types';
import { FC, ReactNode } from 'react';
export interface ISection {
    /** Child content to render in the Section. */
    children: ReactNode;
    /** Optional content flag to apply typography styles. */
    size?: Extract<GenericSize, 'medium' | 'large'>;
    /** Optional flag to use article tag instead of section. */
    article?: boolean;
    content?: boolean;
}
declare const Section: FC<ISection>;
export default Section;
