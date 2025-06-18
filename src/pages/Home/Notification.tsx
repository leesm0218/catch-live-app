import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { throttle } from 'lodash';
import { NotificationItem } from '@/components/ListItem';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useNotificationInfiniteQuery } from '@/hooks/useNotificationInfiniteQuery';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import { pageSize } from '@/constants/notification/notificationConstants';
import type { NotificationItemProps } from '@/types/notificationTypes';

const NotificationPage = () => {
  const size = pageSize;
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    useNotificationInfiniteQuery({ size: size });

  const throttledFetchNextPage = useCallback(
    throttle(
      () => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      1000,
      { trailing: true }
    ),
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  const observerRef = useInfiniteScroll({
    onIntersect: throttledFetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
    threshold: 1,
  });

  useEffect(() => {
    if (error?.message === '401') {
      navigate(ROUTE_URL_FULL.LOGIN);
    }
  }, [error, navigate]);

  if (error) {
    return <div>오류 발생</div>;
  }

  const notifications = data?.pages.flatMap((page) => page.notifications) ?? [];

  return (
    <div className={style.itemList}>
      {notifications.map(
        ({ notificationId, ...rest }: NotificationItemProps) => (
          <NotificationItem key={notificationId} {...rest} />
        )
      )}
      {isFetchingNextPage && <LoadingSpinner />}
      {hasNextPage && (
        <div
          ref={observerRef}
          style={{ height: 2, background: 'transparent' }}
        />
      )}
    </div>
  );
};

export default NotificationPage;
