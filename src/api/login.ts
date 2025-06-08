import type { LoginRequestDto } from '@/types/login';
import axios from 'axios';

const postLogin = async (requestData: LoginRequestDto) => {
  const response = await axios.post('/api/auth/login', requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

export { postLogin };
