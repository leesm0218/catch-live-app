import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import { NotificationItem } from '@/components/ListItem';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { pageSize } from '@/constants/notification/notificationConstants';
import type { NotificationItemProps } from '@/types/notification/notificationTypes';
import { ROUTE_URL_FULL } from '@/constants/routers';

const notificationURL = import.meta.env.VITE_API_BASE_URL + 'notifications';

const fetchNotifications = async (size: number, cursor: number) => {
  const url = notificationURL + `?size=${size}&cursor=${cursor}`;
  const res = await fetch(url, {
    headers: {},
  });
  if (res.status === 401) {
    throw new Error('401');
  }
  if (!res.ok) {
    throw new Error('알림 정보를 불러올 수 없습니다.');
  }
  const json = await res.json();
  return json.data;
};

export const NotificationPage = () => {
  const size = pageSize;
  const cursor = 7;
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: [''],
    queryFn: () => fetchNotifications(size, cursor),
  });

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (error) {
    if (error.message === '401') {
      navigate(ROUTE_URL_FULL.LOGIN);
    }
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
