import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import { toKstDate } from '@/utils/dateUtils';
import type { NotificationItemViewProps } from '@/types/notificationTypes';

export const NotificationItem = (props: NotificationItemViewProps) => {
  const { content, createdAt } = props;

  return (
    <div className={style.item}>
      <div className={style.itemInfo}>{content}</div>
      <div className={style.itemTime}>{toKstDate(createdAt)}</div>
    </div>
  );
};
