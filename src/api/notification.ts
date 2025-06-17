import axios from 'axios';
import type { NotificationItemProps } from '@/types/notificationTypes';
import { GET_NOTIFICATIONS_URL, ACCESS_TOKEN_KEY } from '@/constants/api';
import type { NotificationFetchParam } from '@/types/notificationTypes';

export const fetchNotifications = async (
  params: NotificationFetchParam,
  cursor: number | null
) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  let url = GET_NOTIFICATIONS_URL + `?size=${params.size}`;
  if (cursor !== undefined && cursor !== null) {
    url += `&cursor=${cursor}`;
  }

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken || ''}`,
      },
    });
    return res.data.data as {
      notifications: NotificationItemProps[];
      nextCursor: number;
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error('401');
    }
    throw new Error('알림 정보를 불러올 수 없습니다.');
  }
};
