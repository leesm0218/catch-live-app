import type { ApiResponse } from '@/types/serverResponse';
import type { SubscriptionResponse } from '@/types/subscription';
import { axiosInstance } from './axiosInstance';
import { API_PATH } from '@/constants/api';

export const getSubscriptions = async (): Promise<
  ApiResponse<SubscriptionResponse>
> => {
  const response = await axiosInstance.get(API_PATH.SUBSCRIPTION);
  return response.data;
};

export const deleteSubscription = async (subscriptionId: number) => {
  await axiosInstance.delete(`${API_PATH.SUBSCRIPTION}/${subscriptionId}`);
};

export const postSubscription = async (channelUrl: string) => {
  await axiosInstance.post(API_PATH.SUBSCRIPTION, { channelUrl });
};
