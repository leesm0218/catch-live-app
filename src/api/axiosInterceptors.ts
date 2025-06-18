import { clearToken, getAccessToken, setAccessToken } from '@/utils/authUtils';
import { axiosInstance } from './axiosInstance';
import { reissueAccessToken } from './refresh';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { API_PATH } from '@/constants/api';

const AUTH_EXCLUDE_PATHS = [API_PATH.LOGIN, API_PATH.SIGNUP, API_PATH.REFRESH];

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token && !AUTH_EXCLUDE_PATHS.some((path) => config.url?.includes(path))) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !AUTH_EXCLUDE_PATHS.some((path) => originalRequest.url?.includes(path))
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await reissueAccessToken();
        setAccessToken(newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        clearToken();
        window.location.href = ROUTE_URL_FULL.LOGIN;
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
