import { type FC } from 'react';
import { type IProgressBar } from '../../components/ProgressBar/ProgressBar';
export interface ILoading {
    color?: IProgressBar['color'];
}
declare const Loading: FC<ILoading>;
export default Loading;
