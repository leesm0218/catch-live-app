import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import { NotificationItem } from '@/components/ListItem';
import { useQuery } from '@tanstack/react-query';
import type { NotificationItemProps } from '@/types/notification/notificationTypes';

const notificationURL = import.meta.env.VITE_API_BASE_URL + 'notifications';

const fetchNotifications = async () => {
  const res = await fetch(notificationURL, {
    headers: {},
  });
  if (!res.ok) {
    throw new Error('알림 정보를 불러올 수 없습니다.');
  }
  const json = await res.json();
  return json.data;
};

export const NotificationPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [''],
    queryFn: () => fetchNotifications(),
  });

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (error) {
    return <div>오류 발생</div>;
  }

  if (!data) {
    return <div>오류 발생</div>;
  }

  return (
    <div className={style.ITEM_LIST}>
      {data.notifications.map((props: NotificationItemProps) => (
        <NotificationItem key={props.notificationId} {...props} />
      ))}
    </div>
  );
};
