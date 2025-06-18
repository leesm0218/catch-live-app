import type { AuthProvider } from '@/constants/login';

export type Profile = {
  provider: AuthProvider;
  email: string;
  createdAt: string;
};
