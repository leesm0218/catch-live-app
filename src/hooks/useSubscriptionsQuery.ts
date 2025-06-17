import { useQuery } from '@tanstack/react-query';
import { getSubscriptions } from '@/api/subscription';
import { API_STALE_TIME } from '@/constants/api';

export const useSubscriptionsQuery = () =>
  useQuery({
    queryKey: ['subscriptions'],
    queryFn: getSubscriptions,
    staleTime: API_STALE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    select: (res) => res.data,
  });
