import { getRecordings } from '@/api/recording';
import type {
  GetRecordingsParams,
  RecordingData,
  RecordingResponse,
} from '@/types/recording';
import type { ApiResponse } from '@/types/serverResponse';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useRecordingsInfiniteQuery = (
  params: Omit<GetRecordingsParams, 'cursor'>
) =>
  useInfiniteQuery<
    ApiResponse<RecordingResponse>,
    Error,
    RecordingData[],
    ['recordings', Omit<GetRecordingsParams, 'cursor'>],
    string | null
  >({
    queryKey: ['recordings', params],
    queryFn: async ({ pageParam, queryKey }) => {
      const [, baseParams] = queryKey;
      const cursor = pageParam ?? null;
      const size = cursor ? 5 : 10;

      return await getRecordings({
        ...baseParams,
        cursor,
        size,
      });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.data.nextCursor ?? null,
    refetchOnMount: true,
    select: (res) => res.pages.flatMap((page) => page.data.recordings),
  });
