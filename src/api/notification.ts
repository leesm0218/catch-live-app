import axios from 'axios';
import type { NotificationItemProps } from '@/types/notification/notificationTypes';

const notificationURL =
  import.meta.env.VITE_API_BASE_URL + '/api/v1/notifications';

export const fetchNotifications = async (size: number, cursor?: number) => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  let url = notificationURL + `?size=${size}`;
  if (cursor !== undefined) {
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
