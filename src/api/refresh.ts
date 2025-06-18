import { API_PATH } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const reissueAccessToken = async (): Promise<string> => {
  const response = await axiosInstance.post(API_PATH.REFRESH);
  return response.data.data.accessToken;
};
