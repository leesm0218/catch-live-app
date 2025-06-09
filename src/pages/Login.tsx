import GoogleLoginButton from '@/components/login/GoogleLoginButton';
import KakaoLoginButton from '@/components/login/KakaoLoginButton';
import NaverLoginButton from '@/components/login/NaverLoginButton';
import Header from '@/components/common/Header';
import { LOGIN_STYLE } from '@/constants/styles';

const Login = () => {
  return (
    <div className={LOGIN_STYLE.loginBox}>
      <Header headerTitle="로그인" />
      <p className={LOGIN_STYLE.paragraph}>SNS 계정으로 로그인하기</p>
      <div className={LOGIN_STYLE.buttonBox}>
        <KakaoLoginButton />
        <NaverLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default Login;
