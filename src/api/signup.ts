import type { SignupRequestDto } from '@/types/signup';
import axios from 'axios';

const postSignup = async (requestData: SignupRequestDto) => {
  const { data } = await axios.post('/api/auth/signup', requestData);

  return data;
};

export { postSignup };
