import type { ILink } from '../../types';
import { type FC } from 'react';
export interface IAnalyticsLink extends ILink {
    external?: boolean;
    'aria-label'?: string;
    onClick?: () => void;
}
declare const AnalyticsLink: FC<IAnalyticsLink>;
export default AnalyticsLink;
