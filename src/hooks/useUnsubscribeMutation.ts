import { deleteSubscription } from '@/api/subscription';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

const useUnsubscribeMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: (errorCode: string) => void;
}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSubscription,
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

export default useUnsubscribeMutation;
