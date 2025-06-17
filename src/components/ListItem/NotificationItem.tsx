import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import type { NotificationItemViewProps } from '@/types/notificationTypes';

export const NotificationItem = (props: NotificationItemViewProps) => {
  const { content, createdAt } = props;

  return (
    <div className={style.item}>
      <div className={style.item_info}>{content}</div>
      <div className={style.item_time}>
        {formatDate(new Date(createdAt).toISOString())}
      </div>
    </div>
  );
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
}
