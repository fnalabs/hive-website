import { type Dispatch, type FC, type ReactNode } from 'react';
export declare const CONSENTED = "CONSENTED";
export declare const DECLINED = "DECLINED";
export declare const ConsentContext: import("react").Context<boolean>;
export declare const ConsentDispatchContext: import("react").Context<Dispatch<string>>;
export declare const consentReducer: (consent: boolean, action: string) => boolean;
export interface IConsentProvider {
    /** Child content to render in the ConsentProvider. */
    children: ReactNode;
    /** Optional initial consent state for the ConsentProvider. */
    initial?: boolean;
}
declare const ConsentProvider: FC<IConsentProvider>;
export default ConsentProvider;
