import { type FC, type ReactNode } from 'react';
export interface IMedia {
    /** Content for the main Media experience. */
    children: ReactNode;
    /** Image alt text for accessibility support. */
    imgAlt?: string;
    /** Optional Image source URL for rendering the Media image. */
    imgSrc?: string;
}
declare const Media: FC<IMedia>;
export default Media;
