import GoogleLoginButton from '@/components/Button/GoogleLoginButton';
import KakaoLoginButton from '@/components/Button/KakaoLoginButton';
import NaverLoginButton from '@/components/Button/NaverLoginButton';
import Header from '@/components/Header';
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
