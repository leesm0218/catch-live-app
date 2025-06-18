import axios from 'axios';
import { ACCESS_TOKEN_KEY, DELETE_SIGNUP_API_URL } from '@/constants/api';

export const fetchSignOut = async () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  try {
    const res = await axios.delete(DELETE_SIGNUP_API_URL, {
      headers: {
        Authorization: `Bearer ${accessToken || ''}`,
      },
    });
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('401');
    }
    throw new Error('회원탈퇴에 실패했습니다.');
  }
};
