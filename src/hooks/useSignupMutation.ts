import { postSignup } from '@/api/signup';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const useSignupMutation = (onErrorCallback: (errorCode: string) => void) => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: postSignup,
    onSuccess: () => {
      navigate(ROUTE_URL_FULL.SIGNUP_COMPLETE);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        const errorCode = error?.response?.data?.code;
        onErrorCallback(errorCode);
      }
    },
  });

  return { mutateSignup: mutate, isPending };
};

export default useSignupMutation;
