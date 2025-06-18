export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_STALE_TIME = 1000 * 10; // ms 단위, 10초
export const API_RETRY_COUNT = 1; // ms 단위, 10초
export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

export const GET_PROFILE_API_URL = '/api/users/me';
export const POST_LOGOUT_API_URL = '/api/auth/logout';
export const DELETE_SIGNUP_API_URL = '/api/users/me';
export const GET_NOTIFICATIONS_URL = '/api/notifications';
