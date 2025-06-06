import GoogleLoginButton from '@/components/Button/GoogleLoginButton';
import KakaoLoginButton from '@/components/Button/KakaoLoginButton';
import NaverLoginButton from '@/components/Button/NaverLoginButton';
import Header from '@/components/Header';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header headerTitle="로그인" />
      <p className="text-gray-500 mb-6">SNS 계정으로 로그인하기</p>
      <div className="flex gap-6">
        <KakaoLoginButton />
        <NaverLoginButton />
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default Login;
