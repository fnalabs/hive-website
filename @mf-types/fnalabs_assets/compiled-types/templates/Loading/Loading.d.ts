import { type FC } from 'react';
import { type IHero } from '../../components/Hero/Hero';
import { type IProgressBar } from '../../components/ProgressBar/ProgressBar';
export interface ILoading {
    /** Optional color for the loading experience. */
    color?: IProgressBar['color'];
    /** Optional size for the loading experience. */
    size?: IHero['size'];
}
declare const Loading: FC<ILoading>;
export default Loading;
