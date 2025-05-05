import { FC } from 'react';
export interface IMedia {
    /** Image alt text for accessibility support. */
    imgAlt: string;
    /** Image source URL for rendering the Media image. */
    imgSrc: string;
    /** Subtitle text for the Media experience. */
    subtitle: string;
    /** Title text for the Media experience. */
    title: string;
}
declare const Media: FC<IMedia>;
export default Media;
