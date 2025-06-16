import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchNotifications } from '@/api/notification';
import type { NotificatinFetchResult } from '@/types/notificationTypes';
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
      return Number(lastPage.nextCursor) > 1 ? lastPage.nextCursor : null;
    },
    initialPageParam: null,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });
}

// 서버의 응답에 { nextCursor: number } 가 있도록 작성하는것을 권장합니다.
// 가능한 cursor 를 응답해서, 숫자의 비교를 통해 마지막 데이터인지 검사하는것을 권장합니다.

// >1을 통해 비교하는 이유는, cursor 보다 작은 숫자들을 검색하여 가져오고,
// 현재 프로젝트의 경우에는 key 값을 자동 증가시켜 만드는 옵션들을 사용하기 때문에
// 1보다 작은 데이터는 없다고 간주되어도 되기 때문입니다.
// 서버의 응답이 1보다 작거나 같으면 마지막 데이터까지 가져온것으로 간주됩니다.

// { nextCursor: number | null }의 null 은
// useInfiniteQuery의 내부 동작에 null 값을 요구하기 때문에 포함되었습니다.
// 서버에서는 가능한 { nextCursor: number }의 형태로 응답하는것을 권장합니다.

export function useNotificationInfiniteQuery(param: NotificationFetchParam) {
  return useBaseInfiniteQuery<NotificatinFetchResult, NotificationFetchParam>(
    'notifications',
    param,
    fetchNotifications
  );
}
