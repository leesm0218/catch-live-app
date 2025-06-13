import { useNavigate } from 'react-router-dom';
import { pageSize } from '@/constants/notification/notificationConstants';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import { NotificationItem } from '@/components/ListItem';
import { useEffect, useState } from 'react';
import { useNotificationInfiniteQuery } from '@/hooks/useNotificationInfiniteQuery';
import type { NotificationItemProps } from '@/types/notification/notificationTypes';

const NotificationPage = () => {
  const size = pageSize;
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<NotificationItemProps[]>(
    []
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    useNotificationInfiniteQuery(size);

  const platData = data?.pages.flatMap((page) => page.notifications) || [];

  useEffect(() => {
    if (notifications.length > 0) {
      setNotifications((prev) => [...prev, ...notifications]);
    }
  }, [data]);

  if (isFetchingNextPage) return <div>로딩 중</div>;

  if (error || !data) {
    if ((error as Error).message === '401') {
      navigate(ROUTE_URL_FULL.LOGIN);
    }
    return <div>오류 발생</div>;
  }

  return (
    <div className={style.item_list}>
      {platData.map((props: NotificationItemProps) => (
        <NotificationItem key={props.notificationId} {...props} />
      ))}
      {hasNextPage && <div style={{ height: 1 }} />}
    </div>
  );
};

export default NotificationPage;
