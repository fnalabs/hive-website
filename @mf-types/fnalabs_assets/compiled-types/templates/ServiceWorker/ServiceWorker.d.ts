import { type FC } from 'react';
export declare const locationReload: () => void;
export interface IServiceWorker {
    src: string;
    scope: string;
}
declare const ServiceWorker: FC<IServiceWorker>;
export default ServiceWorker;
