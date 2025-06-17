export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_STALE_TIME = 1000 * 10; // ms 단위, 10초
export const API_RETRY_COUNT = 1; // ms 단위, 10초
export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

export const AUTH_EXCLUDE_PATHS = [
  '/auth/login',
  '/auth/signup',
  '/auth/tokens/refresh',
];

export const API_PATH = {
  SIGNUP: '/auth/signup',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: 'auth/tokens/refresh',
  SUBSCRIPTION: '/subscriptions',
  RECORDING: '/recordings',
  NOTIFICATION: '/notifications',
  USER: 'user/me',
};
