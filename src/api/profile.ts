import axios from 'axios';
import type { Profile } from '@/types/profile';
import { API_PATH } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const fetchProfile = async (): Promise<Profile> => {
  try {
    const res = await axiosInstance.get(API_PATH.USER);

    return res.data.data as Profile;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('401');
    }
    throw new Error('유저 정보를 불러올 수 없습니다.');
  }
};
