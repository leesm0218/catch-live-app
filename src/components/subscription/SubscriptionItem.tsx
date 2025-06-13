import { deleteSubscription } from '@/api/subscription';
import { SUBSCRIPTION_ITEM_STYLE } from '@/constants/styles';
import type { Platform } from '@/types/recording';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MinusIcon } from 'lucide-react';
import { useState } from 'react';
import ConfirmModal from '../common/ConfirmModal';
import AlertModal from '../common/AlertModal';

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
  const { subscriptionId, subscribedAt, channel } = props;
  const [alertMessage, setAlertMessage] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const queryClient = useQueryClient();

  const confirmMessage = `[${channel.channelName}] 채널 구독을 취소하시겠습니까?`;

  const { mutate: mutateUnsubscribe } = useMutation({
    mutationFn: deleteSubscription,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscriptions'] });
      setAlertMessage('채널 구독이 취소되었습니다.');
    },
    onError: () => {
      setAlertMessage('구독채널 삭제 도중 문제가 발생했습니다.');
    },
  });

  const handleClickButton = () => {
    setShowConfirmModal(true);
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    mutateUnsubscribe(subscriptionId);
  };

  return (
    <>
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
              onClick={() => handleClickButton()}
              className={SUBSCRIPTION_ITEM_STYLE.deleteButton}
            >
              <MinusIcon className={SUBSCRIPTION_ITEM_STYLE.deleteIcon} />
            </button>
          </div>
        </div>
      </div>
      {showConfirmModal && (
        <ConfirmModal
          message={confirmMessage}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirmModal(false)}
        />
      )}
      {alertMessage && (
        <AlertModal
          message={alertMessage}
          onClose={() => setAlertMessage('')}
        />
      )}
    </>
  );
};

export default SubscriptionItem;
