export type NotificationItemProps = {
  notificationId: number;
  content: string;
  createdAt: string;
};

export type NotificatinFetchResult = {
  notifications: NotificationItemProps[];
  nextCursor: number | null;
};
