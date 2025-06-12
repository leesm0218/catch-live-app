import type { Platform } from './recording';

export interface SubscriptionData {
  subscriptionId: number;
  subscribedAt: string | null;
  channel: {
    channelId: string;
    channelName: string;
    platform: Platform;
  };
}
