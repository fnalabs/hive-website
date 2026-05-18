import { type FC, type ReactNode } from 'react';
export interface ICard {
    /** Main content for the Card. */
    children: ReactNode;
    /** Optional header content for the Card. */
    header?: ReactNode;
    /** Optional Footer content for the Card. */
    footer?: ReactNode;
    /** Optional Image content for the Card. */
    image?: ReactNode;
    /** Optional Title for the Card. */
    title?: string;
}
declare const Card: FC<ICard>;
export default Card;
