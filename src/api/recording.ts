import axios from 'axios';
import type { ApiResponse } from '../types/serverResponse';
import type {
  GetRecordingsParams,
  RecordingResponse,
} from '../types/recording';
import type { QueryFunctionContext } from '@tanstack/react-query';
import { axiosInstance } from './axiosInstance';
import { API_PATH } from '@/constants/api';

export const getRecordings = async (
  ctx: QueryFunctionContext<['recordings', GetRecordingsParams]>
): Promise<ApiResponse<RecordingResponse>> => {
  const [, params] = ctx.queryKey;

  try {
    const response = await axiosInstance.get(API_PATH.RECORDING, {
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
