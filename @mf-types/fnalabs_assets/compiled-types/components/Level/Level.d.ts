import { FC, ReactNode } from 'react';
export type ILevelItem = {
    content: ReactNode;
    centered?: boolean;
};
export interface ILevelGroup {
    left?: ILevelItem[];
    right?: ILevelItem[];
}
export interface ILevel {
    items: ILevelGroup | ILevelItem[];
    mobile?: boolean;
    nav?: boolean;
}
declare const Level: FC<ILevel>;
export default Level;
