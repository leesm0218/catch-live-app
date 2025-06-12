import Header from '@/components/common/Header';
import InputWithButton from '@/components/common/InputWithButton';
import SubscriptionItem from '@/components/subscription/SubscriptionItem';
import { SUBSCRIPTION_PAGE_STYLE } from '@/constants/styles';
import type { SubscriptionData } from '@/types/subscription';

const Subscription = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};

  const subscriptions: SubscriptionData[] = [
    {
      subscriptionId: 1,
      subscribedAt: '2025-06-04T08:16:39.836Z',
      channel: {
        channelId: 'chanel-id',
        channelName: 'channel-name',
        platform: 'CHZZK',
      },
    },
  ];

  return (
    <div>
      <InputWithButton
        placeholder="구독하고 싶은 채널 url을 입력하세요."
        inputText=""
        buttonText="확인"
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Header headerTitle="구독 목록" />
      <div className={SUBSCRIPTION_PAGE_STYLE.itemList}>
        {subscriptions.map((subscription) => (
          <SubscriptionItem
            key={subscription.subscriptionId}
            {...subscription}
          />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
