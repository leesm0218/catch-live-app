import type { SignupRequestDto } from '@/types/signup';
import { axiosInstance } from './axiosInstance';
import { API_PATH } from '@/constants/api';

const postSignup = async (requestData: SignupRequestDto) => {
  const { data } = await axiosInstance.post(API_PATH.SIGNUP, requestData);

  return data;
};

export { postSignup };
