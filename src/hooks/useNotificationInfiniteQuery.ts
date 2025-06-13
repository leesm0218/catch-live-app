import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchNotifications } from '@/api/notification';

export function useNotificationInfiniteQuery(size: number = 1) {
  return useInfiniteQuery({
    queryKey: ['notifications', size],
    queryFn: async ({ pageParam }: { pageParam?: number | null }) => {
      return fetchNotifications(
        size,
        pageParam === null ? undefined : pageParam
      );
    },
    getNextPageParam: (lastPage) => {
      return Number(lastPage.nextCursor) > 1 ? lastPage.nextCursor : undefined;
    },
    initialPageParam: null,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
  });
}
