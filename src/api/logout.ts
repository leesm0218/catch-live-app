import axios from 'axios';
import { POST_LOGOUT_API_URL, ACCESS_TOKEN_KEY } from '@/constants/api';

export const fetchLogout = async () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  try {
    const res = await axios.post(
      POST_LOGOUT_API_URL,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken || ''}`,
        },
      }
    );
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('401');
    }
    throw new Error('로그아웃에 실패했습니다.');
  }
};
