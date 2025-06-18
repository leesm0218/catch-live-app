import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '@/api/profile';
import type { Profile } from '@/types/profile';

export function useProfileQuery() {
  return useQuery<Profile>({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });
}
