import { type FC } from 'react';
export interface IAnalyticsToast {
    /** The Google Analytics ID for the Analytics toast to initialize with. */
    gaId: string;
}
declare const AnalyticsToast: FC<IAnalyticsToast>;
export default AnalyticsToast;
