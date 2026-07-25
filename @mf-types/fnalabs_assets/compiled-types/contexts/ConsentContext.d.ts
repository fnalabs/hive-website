import { type Dispatch, type FC } from 'react';
export declare const CONSENTED = "CONSENTED";
export declare const DECLINED = "DECLINED";
export declare const ConsentContext: import("react").Context<boolean>;
export declare const ConsentDispatchContext: import("react").Context<Dispatch<string>>;
export declare const consentReducer: (consent: boolean, action: string) => boolean;
export interface IConsentProvider {
    children: React.ReactNode;
}
declare const ConsentProvider: FC<IConsentProvider>;
export default ConsentProvider;
