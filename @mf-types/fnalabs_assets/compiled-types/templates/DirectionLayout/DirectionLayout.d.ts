import type { ILink, Color } from '../../types';
import { type FC } from 'react';
export interface IDirectionLayout {
    /**
     * Nested list of optional links to render for the DirectionLayout.<br />
     * code>ILink</code>
     * <pre>
     * interface ILink {
     *   href: string
     *   label: string
     * }
     * </pre>
     */
    links: {
        next?: ILink;
        prev?: ILink;
        up?: ILink;
    };
    /**
     * The color of the DirectionLayout ribbon.<br />
     */
    color: Exclude<Color, 'text' | 'ghost'>;
}
/** A Bulma Hero/Level as a 'ribbon' directional navigation with additional layout. */
declare const DirectionLayout: FC<IDirectionLayout>;
export default DirectionLayout;
