import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import type { NotificationItemProps } from '@/types/notificationTypes';

export const NotificationItem = (props: NotificationItemProps) => {
  const { notificationId, content, createdAt } = props;

  return (
    <div className={style.item}>
      <div>{notificationId}</div>
      <div>{content}</div>
      <div>{createdAt}</div>
    </div>
  );
};
