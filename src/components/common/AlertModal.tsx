import { MODAL_STYLE } from '@/constants/styles';

type AlertModalProps = {
  message: string;
  confirmText?: string;
  onClose: () => void;
};

const AlertModal = ({
  message,
  confirmText = '확인',
  onClose,
}: AlertModalProps) => {
  return (
    <div className={MODAL_STYLE.backdrop}>
      <div className={MODAL_STYLE.container}>
        <p className={MODAL_STYLE.message}>{message}</p>
        <button onClick={onClose} className={MODAL_STYLE.button}>
          {confirmText}
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
