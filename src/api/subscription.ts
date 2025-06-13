import type { ApiResponse } from '@/types/serverResponse';
import type { SubscriptionResponse } from '@/types/subscription';
import axios from 'axios';

export const getSubscriptions = async (): Promise<
  ApiResponse<SubscriptionResponse>
> => {
  console.log('getSubscriptions 조회');
  const response = await axios.get('/api/subscriptions/');
  return response.data;
};

export const deleteSubscription = async (subscriptionId: number) => {
  await axios.delete(`/api/subscriptions/${subscriptionId}`);
};

export const postSubscription = async (channelUrl: string) => {
  console.log({ channelUrl });
  await axios.post('/api/subscriptions/', { channelUrl });
};
