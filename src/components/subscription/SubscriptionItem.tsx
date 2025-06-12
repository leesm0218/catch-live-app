import { SUBSCRIPTION_ITEM_STYLE } from '@/constants/styles';
import type { Platform } from '@/types/recording';
import { MinusIcon } from 'lucide-react';

type SubscriptionItemProps = {
  subscriptionId: number;
  subscribedAt: string | null;
  channel: {
    channelId: string;
    channelName: string;
    platform: Platform;
  };
};

const SubscriptionItem = (props: SubscriptionItemProps) => {
  const { subscribedAt, channel } = props;

  const handleClick = () => {};

  return (
    <div className={SUBSCRIPTION_ITEM_STYLE.container}>
      <div className={SUBSCRIPTION_ITEM_STYLE.box}>
        <div className={SUBSCRIPTION_ITEM_STYLE.leftBox}>
          <p
            className={SUBSCRIPTION_ITEM_STYLE.channel}
          >{`채널: ${channel.channelName}`}</p>
          <p
            className={SUBSCRIPTION_ITEM_STYLE.platform}
          >{`플랫폼: ${channel.platform}`}</p>
        </div>
        <div className={SUBSCRIPTION_ITEM_STYLE.rightBox}>
          <span className={SUBSCRIPTION_ITEM_STYLE.dateText}>
            {subscribedAt}
          </span>
          <button
            onClick={() => handleClick()}
            className={SUBSCRIPTION_ITEM_STYLE.deleteButton}
          >
            <MinusIcon className={SUBSCRIPTION_ITEM_STYLE.deleteIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionItem;
