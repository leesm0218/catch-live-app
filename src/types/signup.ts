import type { ProviderType } from './login';

export type SignupRequestDto = {
  provider: ProviderType;
  email: string;
  nickname: string;
};
