import Header from '@/components/Header';
import { LOGIN_BUTTON_STYLE } from '@/constants/styles';

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header headerTitle="로그인" />
      <p className="text-gray-500 mb-6">SNS 계정으로 로그인하기</p>
      <SNSLoginButtons />
    </div>
  );
};

export const SNSLoginButtons = () => {
  return (
    <div className="flex gap-6">
      <KakaoLoginButton />
      <NaverLoginButton />
      <GoogleLoginButton />
    </div>
  );
};

const KakaoLoginButton = () => {
  const handleLogin = () => {
    const authUrl = 'https://kauth.kakao.com/oauth/authorize';
    const redirectUri = encodeURIComponent(
      import.meta.env.VITE_KAKAO_REDIRECT_URI
    );

    const url = `${authUrl}?response_type=code&client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${redirectUri}`;

    window.location.href = url;
  };

  return (
    <button onClick={handleLogin} className="w-12 h-12">
      <img
        src="/src/assets/icons/login_icon_kakao.png"
        alt="카카오 로그인"
        className={LOGIN_BUTTON_STYLE}
      />
    </button>
  );
};

const NaverLoginButton = () => {
  const handleLogin = () => {
    const authUrl = 'https://nid.naver.com/oauth2.0/authorize';
    const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      import.meta.env.VITE_NAVER_REDIRECT_URI
    );
    const state = Math.random().toString(36).substring(2, 15);

    const url = `${authUrl}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

    window.location.href = url;
  };

  return (
    <button onClick={handleLogin} className="w-12 h-12">
      <img
        src="/src/assets/icons/login_icon_naver.png"
        alt="네이버 로그인"
        className={LOGIN_BUTTON_STYLE}
      />
    </button>
  );
};

const GoogleLoginButton = () => {
  const handleLogin = () => {
    const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      import.meta.env.VITE_GOOGLE_REDIRECT_URI
    );

    const url = `${authUrl}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email`;

    window.location.href = url;
  };

  return (
    <button onClick={handleLogin} className="w-12 h-12">
      <img
        src="/src/assets/icons/login_icon_google.png"
        alt="구글 로그인"
        className={LOGIN_BUTTON_STYLE}
      />
    </button>
  );
};
