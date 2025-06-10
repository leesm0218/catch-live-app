import { SIGNUP_PAGE_STYLE } from '@/constants/styles';

const ProgressBar = () => {
  return (
    <div className={SIGNUP_PAGE_STYLE.progressBarbox}>
      <div className={SIGNUP_PAGE_STYLE.progressBarComplete}></div>
    </div>
  );
};

export default ProgressBar;
