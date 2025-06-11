import { SIGNUP_PAGE_STYLE } from '@/constants/styles';

type ProgressType = 'half' | 'full';

interface ProgressBarType {
  progress: ProgressType;
}

const ProgressBar = ({ progress }: ProgressBarType) => {
  const progressBarStyle =
    progress === 'full'
      ? SIGNUP_PAGE_STYLE.progressBarComplete
      : SIGNUP_PAGE_STYLE.progressBar;
  return (
    <div className={SIGNUP_PAGE_STYLE.progressBarbox}>
      <div className={progressBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
