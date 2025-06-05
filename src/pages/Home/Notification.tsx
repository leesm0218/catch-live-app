import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import { NotificationItem } from '@/components/ListItem';
import { notificationItemDatas } from '@/constants/notification/notificationConstants';

export const NotificationPage = () => {
  return (
    <div className={style.ITEM_LIST}>
      {notificationItemDatas.map((props) => (
        <NotificationItem key={props.notificationId} {...props} />
      ))}
    </div>
  );
};
