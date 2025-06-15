import Header from '@/components/common/Header';
import InputWithButton from '@/components/common/InputWithButton';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import SubscriptionItem from '@/components/subscription/SubscriptionItem';
import { SUBSCRIPTION_PAGE_STYLE } from '@/constants/styles';
import { useState } from 'react';
import AlertModal from '@/components/common/AlertModal';
import { useSubscriptionsQuery } from '@/hooks/useSubscriptionsQuery';
import useSubscribeMutation from '@/hooks/useSubscribeMutation';

const Subscription = () => {
  const [channelUrl, setChannelUrl] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const { mutate: mutateSubscribe } = useSubscribeMutation(
    () => setAlertMessage('구독 채널이 추가되었습니다.'),
    (errorCode: string) => {
      if (errorCode === '4402') {
        setAlertMessage('이미 구독중인 채널입니다.');
      } else if (errorCode === '4403') {
        setAlertMessage('더 이상 채널을 구독할 수 없습니다.');
      } else {
        setAlertMessage('구독 채널 추가에 실패했습니다. URL을 확인해주세요.');
      }
    }
  );

  const { data, isLoading, isError } = useSubscriptionsQuery();

  if (isError) {
    return <div>구독 채널을 불러오는 데 실패했습니다.</div>;
  }

  const handleSubmit = () => {
    if (channelUrl.trim() === '') {
      setAlertMessage('구독하고 싶은 채널 URL을 입력해주세요.');
      return;
    }

    mutateSubscribe(channelUrl);
  };

  const handleCloseModal = () => setAlertMessage('');

  return (
    <div>
      <p className={SUBSCRIPTION_PAGE_STYLE.paragraph}>
        <span className={SUBSCRIPTION_PAGE_STYLE.bold}>CHZZK </span>
        또는 <span className={SUBSCRIPTION_PAGE_STYLE.bold}>YOUTUBE</span>{' '}
        <span className={SUBSCRIPTION_PAGE_STYLE.boldWithColor}>채널 URL</span>{' '}
        을 입력하면{' '}
        <span className={SUBSCRIPTION_PAGE_STYLE.boldWithColor}>
          방송 시작 시 자동으로 녹화
        </span>
        가 시작됩니다.
      </p>
      <InputWithButton
        placeholder="구독하고 싶은 채널 URL을 입력하세요."
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
