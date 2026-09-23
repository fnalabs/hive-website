import type { ILink } from '../../types';
import { type FC, type MouseEvent } from 'react';
export interface IAnalyticsLink extends ILink {
    /** A function to be called when the link is clicked. */
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}
declare const AnalyticsLink: FC<IAnalyticsLink>;
export default AnalyticsLink;
