import { LOGIN_STYLE } from '@/constants/styles';
import type { ProviderType } from '@/types/auth';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const OauthRedirectHandler = () => {
  const { provider } = useParams<{ provider: ProviderType }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');

  useEffect(() => {
    const login = async () => {
      if (!code) {
        navigate('/login');
        return;
      }

      try {
        const requestData =
          provider === 'naver'
            ? { provider, authorizationCode: code, state }
            : { provider, authorizationCode: code };

        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
          requestData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const { needSignup, accessToken } = response.data;

        if (needSignup) {
          navigate('/signup');
        } else {
          // TODO: accessToken 저장 로직 수정
          localStorage.setItem('accessToken', accessToken);
          navigate('/home/subscription');
        }
      } catch (error) {
        console.error('로그인에 실패했습니다.', error);
        navigate('/login');
      }
    };

    login();
  });

  return <div className={LOGIN_STYLE.loading}>로그인 처리 중입니다...</div>;
};

export default OauthRedirectHandler;
