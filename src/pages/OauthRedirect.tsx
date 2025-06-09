import { LOGIN_STYLE } from '@/constants/styles';
import type { ProviderType } from '@/types/login';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import useLoginMutation from '@/hooks/useLoginMutation';
import { isAuthProvider } from '@/utils/login';

const OauthRedirect = () => {
  const { provider } = useParams<{ provider: ProviderType }>();
  const [searchParams] = useSearchParams();

  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error || !code || !isAuthProvider(provider)) {
    throw new Error('로그인에 실패했습니다.');
  }

  const { mutateLogin } = useLoginMutation();

  useEffect(() => {
    mutateLogin({ provider, authorizationCode: code });
  }, [code, provider, mutateLogin]);

  return <div className={LOGIN_STYLE.loading}>로그인 중입니다</div>;
};

export default OauthRedirect;
