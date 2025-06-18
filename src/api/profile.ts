import axios from 'axios';
import type { Profile } from '@/types/profile';
import { GET_PROFILE_API_URL, ACCESS_TOKEN_KEY } from '@/constants/api';

export const fetchProfile = async (): Promise<Profile> => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  try {
    const res = await axios.get(GET_PROFILE_API_URL, {
      headers: {
        Authorization: `Bearer ${accessToken || ''}`,
      },
    });
    return res.data.data as Profile;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('401');
    }
    throw new Error('유저 정보를 불러올 수 없습니다.');
  }
};
