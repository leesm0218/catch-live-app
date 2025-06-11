import Header from '@/components/common/Header';
import ProgressBar from '@/components/signup/ProgressBar';
import SignupButton from '@/components/signup/SignupButton';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { SIGNUP_PAGE_STYLE } from '@/constants/styles';
import { CheckIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignupComplete = () => {
  const navigate = useNavigate();

  return (
    <div className={SIGNUP_PAGE_STYLE.constainer}>
      <Header headerTitle="회원가입" />
      <ProgressBar progress="full" />
      <div className={SIGNUP_PAGE_STYLE.contentBox}>
        <div className={SIGNUP_PAGE_STYLE.checkIconCircle}>
          <CheckIcon className={SIGNUP_PAGE_STYLE.checkIcon} />
        </div>
        <p className={SIGNUP_PAGE_STYLE.paragraph}>
          회원가입이 <b>완료</b>
          되었습니다.
        </p>
      </div>
      <SignupButton
        text="처음으로"
        onClick={() => {
          navigate(ROUTE_URL_FULL.LOGIN);
        }}
      />
    </div>
  );
};

export default SignupComplete;
