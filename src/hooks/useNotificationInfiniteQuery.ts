import { fetchNotifications } from '@/api/notification';
import type { NotificationFetchResult } from '@/types/notificationTypes';
import type { NotificationFetchParam } from '@/types/notificationTypes';
import { useBaseInfiniteQuery } from '@/hooks/useBaseInfiniteQuery';
export { useBaseInfiniteQuery };

export function useNotificationInfiniteQuery(param: NotificationFetchParam) {
  return useBaseInfiniteQuery<NotificationFetchResult, NotificationFetchParam>(
    'notifications',
    param,
    fetchNotifications
  );
}
