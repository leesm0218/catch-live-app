export type NotificationItemProps = {
  notificationId: number;
  content: string;
  createdAt: string;
};

export type NotificationFetchResult = {
  notifications: NotificationItemProps[];
  nextCursor: number | null;
};

export type NotificationFetchParam = {
  size: number;
};
