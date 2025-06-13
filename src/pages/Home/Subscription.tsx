import { getSubscriptions, postSubscription } from '@/api/subscription';
import Header from '@/components/common/Header';
import InputWithButton from '@/components/common/InputWithButton';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import SubscriptionItem from '@/components/subscription/SubscriptionItem';
import { SUBSCRIPTION_PAGE_STYLE } from '@/constants/styles';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import AlertModal from '@/components/common/AlertModal';
import { API_STALE_TIME } from '@/constants/api';

const Subscription = () => {
  const [channelUrl, setChannelUrl] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const queryClient = useQueryClient();

  const { mutate: mutatePostSubscription } = useMutation({
    mutationFn: postSubscription,
    onSuccess: () => {
      setAlertMessage('구독 채널이 추가되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['subscriptions'] });
    },
    onError: () => {
      setAlertMessage('구독 채널 추가에 실패했습니다. URL을 확인해주세요.');
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: getSubscriptions,
    staleTime: API_STALE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    select: (res) => res.data,
  });

  const handleSubmit = () => {
    if (channelUrl.trim() === '') {
      setAlertMessage('구독하고 싶은 채널 URL을 입력해주세요.');
      return;
    }

    mutatePostSubscription(channelUrl);
  };

  const handleCloseModal = () => setAlertMessage('');

  return (
    <div>
      <InputWithButton
        placeholder="구독하고 싶은 채널 url을 입력하세요."
        inputText={channelUrl}
        buttonText="확인"
        onChange={setChannelUrl}
        onSubmit={handleSubmit}
      />
      <Header headerTitle="구독 목록" />
      <div className={SUBSCRIPTION_PAGE_STYLE.itemList}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          data?.subscriptions.map((subscription) => (
            <SubscriptionItem
              key={subscription.subscriptionId}
              {...subscription}
            />
          ))
        )}
      </div>
      {alertMessage && (
        <AlertModal message={alertMessage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Subscription;
