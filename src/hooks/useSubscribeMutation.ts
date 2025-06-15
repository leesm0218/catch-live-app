import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postSubscription } from '@/api/subscription';
import { isAxiosError } from 'axios';

const useSubscribeMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (errorCode: string) => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postSubscription,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscriptions'] });
      onSuccess();
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        const errorCode = error?.response?.data?.code;

        onError(errorCode);
      }
    },
  });
};

export default useSubscribeMutation;
