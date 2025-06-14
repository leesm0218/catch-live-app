import axios from 'axios';

const profileApiUrl = import.meta.env.VITE_API_BASE_URL + '/api/v1/users/me';

export const fetchProfile = async () => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  try {
    const res = await axios.get(profileApiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken || ''}`,
      },
    });
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('401');
    }
    throw new Error('유저 정보를 불러올 수 없습니다.');
  }
};
