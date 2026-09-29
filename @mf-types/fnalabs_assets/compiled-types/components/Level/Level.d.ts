import { FC, ReactNode } from 'react';
export interface ILevelItem {
    content: ReactNode;
    centered?: boolean;
}
export interface ILevelGroup {
    left?: ILevelItem[];
    right?: ILevelItem[];
}
export interface ILevel {
    /**
     * List of items or optional groups to display in the level.<br />
     * <code>ILevelItem</code>
     * <pre>
     * interface ILevelItem {
     *   content: ReactNode
     *   centered?: boolean
     * }
     * </pre>
     * <code>ILevelGroup</code>
     * <pre>
     * interface ILevelGroup {
     *   left?: ILevelItem[]
     *   right?: ILevelItem[]
     * }
     * </pre>
     */
    items: ILevelGroup | ILevelItem[];
    /** Optional mobile variant for the level. */
    mobile?: boolean;
    /** Optional nav variant for the level. */
    nav?: boolean;
}
declare const Level: FC<ILevel>;
export default Level;
