import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '@/api/profile';

export function useProfileQuery() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    retry: (failureCount, error) => {
      if (error?.message === '401') return false;
      return failureCount < 3;
    },
  });
}
