import { type FC } from 'react';
import { type IHero } from '../../components/Hero/Hero';
import { type IProgressBar } from '../../components/ProgressBar/ProgressBar';
export interface ILoading {
    color?: IProgressBar['color'];
    size?: IHero['size'];
}
declare const Loading: FC<ILoading>;
export default Loading;
