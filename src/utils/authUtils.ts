import { AUTH_PROVIDER, type AuthProvider } from '@/constants/login';

export const isAuthProvider = (
  provider: string | undefined
): provider is AuthProvider => {
  return Object.values(AUTH_PROVIDER).includes(provider as AuthProvider);
};
