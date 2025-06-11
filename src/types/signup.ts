import type { ProviderType } from './login';

export type SignupRequestDto = {
  provider: ProviderType;
  authorizationCode: string;
  state?: string;
  user: {
    email: string;
    nicknamd: string;
  };
};
