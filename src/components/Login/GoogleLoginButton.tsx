import { LOGIN_STYLE } from '@/constants/styles';

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
        className={LOGIN_STYLE.button}
      />
    </button>
  );
};

export default GoogleLoginButton;
