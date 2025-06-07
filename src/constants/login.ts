export const AUTH_PROVIDER = {
  KAKAO: 'kakao',
  NAVER: 'naver',
  GOOGLE: 'google',
} as const;

export type AuthProvider = (typeof AUTH_PROVIDER)[keyof typeof AUTH_PROVIDER];
