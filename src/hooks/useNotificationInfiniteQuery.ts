import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchNotifications } from '@/api/notification';
import type { NotificationFetchResult } from '@/types/notificationTypes';
import type { NotificationFetchParam } from '@/types/notificationTypes';

export function useBaseInfiniteQuery<
  T extends { nextCursor: number | null },
  P extends { size: number },
>(
  key: string,
  params: P,
  fetchFunction: (params: P, cursor: number | null) => Promise<T>
) {
  return useInfiniteQuery({
    queryKey: [key],
    queryFn: async ({ pageParam }: { pageParam: number | null }) => {
      return fetchFunction(params, pageParam);
    },
    getNextPageParam: (lastPage) => {
      return Number(lastPage.nextCursor) > 0 ? lastPage.nextCursor : null;
    },
    initialPageParam: null,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });
}

// 서버의 응답에 { nextCursor: number } 가 있도록 작성하는것을 권장합니다.
// 가능한 cursor 를 응답해서, 숫자의 비교를 통해 마지막 데이터인지 검사하는것을 권장합니다.

// { nextCursor: number | null }의 null 은
// useInfiniteQuery의 내부 동작에 null 값을 요구하기 때문에 포함되었습니다.
// 서버에서는 가능한 { nextCursor: number }의 형태로 응답하는것을 권장합니다.

export function useNotificationInfiniteQuery(param: NotificationFetchParam) {
  return useBaseInfiniteQuery<NotificationFetchResult, NotificationFetchParam>(
    'notifications',
    param,
    fetchNotifications
  );
}
