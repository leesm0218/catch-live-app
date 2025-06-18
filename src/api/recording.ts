import axios from 'axios';
import type { ApiResponse } from '../types/serverResponse';
import type {
  GetRecordingsParams,
  RecordingResponse,
} from '../types/recording';
import { ACCESS_TOKEN_KEY } from '@/constants/api';

export const getRecordings = async (
  params: GetRecordingsParams
): Promise<ApiResponse<RecordingResponse>> => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  try {
    const response = await axios.get('/api/recordings', {
      params,
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 400) {
      console.error('잘못된 파라미터를 전달하였습니다.');
    }
    throw err;
  }
};
