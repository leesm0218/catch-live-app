import { getRecordings } from '@/api/recording';
import { API_RETRY_COUNT, API_STALE_TIME } from '@/constants/api';
import type { GetRecordingsParams } from '@/types/recording';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useRecordingsQuery = (params: GetRecordingsParams) =>
  useSuspenseQuery({
    queryKey: ['recordings', params],
    queryFn: getRecordings,
    staleTime: API_STALE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    retry: API_RETRY_COUNT,
    select: (res) => res.data,
  });
