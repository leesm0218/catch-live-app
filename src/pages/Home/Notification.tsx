import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { pageSize } from '@/constants/notification/notificationConstants';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import { NotificationItem } from '@/components/ListItem';
import type { NotificationItemProps } from '@/types/notification/notificationTypes';
import { useEffect, useState } from 'react';

const notificationURL =
  import.meta.env.VITE_API_BASE_URL + '/api/v1/notifications';

const fetchNotifications = async (size: number, cursor?: number) => {
  let url = notificationURL + `?size=${size}&cursor=${cursor}`;
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (cursor === undefined) {
    url = notificationURL + `?size=${size}`;
  }
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken || ''}`,
    },
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

const NotificationPage = () => {
  const size = pageSize;
  const navigate = useNavigate();
  const [haveNext, setHaveNext] = useState<boolean>(true);
  const [cursor, setCursor] = useState(undefined);
  const [notifications, setNotifications] = useState<NotificationItemProps[]>(
    []
  );

  const { data, isLoading, error } = useQuery({
    queryKey: [''],
    queryFn: () => fetchNotifications(size, cursor),
    enabled: haveNext,
    refetchInterval: 500,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (data?.notifications.length > 0) {
      setNotifications((prev) => [...prev, ...data.notifications]);
      if (cursor !== data.nextCursor) {
        setCursor(data.nextCursor);
      }
      if (data.nextCursor < 2) {
        //다음 커서가 2보다 작으면 더 이상 뽑아낼 데이터가 없다.
        setHaveNext(false);
      }
    }
  }, [data]);

  if (isLoading) return <div>로딩 중</div>;

  if (error) {
    if ((error as Error).message === '401') {
      navigate(ROUTE_URL_FULL.LOGIN);
    }
    return <div>오류 발생</div>;
  }

  if (!data) return <div>오류 발생</div>;

  return (
    <div className={style.item_list}>
      {notifications.map((props: NotificationItemProps) => (
        <NotificationItem key={props.notificationId} {...props} />
      ))}
      <div style={{ height: 1 }} />
    </div>
  );
};

export default NotificationPage;
