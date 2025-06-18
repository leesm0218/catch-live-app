import axios from 'axios';
import { API_PATH } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const fetchSignOut = async () => {
  try {
    const res = await axiosInstance.delete(API_PATH.USER);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('401');
    }
    throw new Error('회원탈퇴에 실패했습니다.');
  }
};
