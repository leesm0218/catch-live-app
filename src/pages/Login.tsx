import GoogleLoginButton from '@/components/Login/GoogleLoginButton';
import KakaoLoginButton from '@/components/Login/KakaoLoginButton';
import NaverLoginButton from '@/components/Login/NaverLoginButton';
import Header from '@/components/common/Header';
import { LOGIN_STYLE } from '@/constants/styles';
import { useAuthStore } from '@/stores/authStore';
import { Navigate } from 'react-router-dom';
import { ROUTE_URL_FULL } from '@/constants/routers';

const Login = () => {
  const { isLoggedIn } = useAuthStore();

  if (isLoggedIn) return <Navigate to={ROUTE_URL_FULL.SUBSCRIPTION} />;

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
