export type ProviderType = 'kakao' | 'naver' | 'google';

export type LoginRequestDto = {
  provider: ProviderType;
  authorizationCode: string;
};
