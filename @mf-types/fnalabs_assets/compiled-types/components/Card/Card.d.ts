import { FC, ReactNode } from 'react';
export interface ICard {
    /** Main content for the Card. */
    children: ReactNode;
    /** Optional className to add to the Card. */
    className?: string;
    /** Optional Footer content for the Card. */
    footer?: ReactNode;
    /** Optional Image content for the Card. */
    image?: ReactNode;
    /** Optional Title for the Card. */
    title?: string;
}
declare const Card: FC<ICard>;
export default Card;
