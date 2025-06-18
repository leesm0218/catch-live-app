import { useQuery } from '@tanstack/react-query';
import { getSubscriptions } from '@/api/subscription';

export const useSubscriptionsQuery = () =>
  useQuery({
    queryKey: ['subscriptions'],
    queryFn: getSubscriptions,

    select: (res) => res.data,
  });
