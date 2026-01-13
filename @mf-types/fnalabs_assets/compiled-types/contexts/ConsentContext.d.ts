import React, { type FC } from 'react';
export declare const CONSENTED = "CONSENTED";
export declare const DECLINED = "DECLINED";
export declare const ConsentContext: React.Context<boolean>;
export declare const ConsentDispatchContext: React.Context<React.Dispatch<string>>;
export declare const consentReducer: (consent: boolean, action: string) => boolean;
export interface IConsentProvider {
    children: React.ReactNode;
}
declare const ConsentProvider: FC<IConsentProvider>;
export default ConsentProvider;
