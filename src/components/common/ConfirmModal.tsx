import { MODAL_STYLE } from '@/constants/styles';

type ConfirmModalProps = {
  message: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal = ({
  message,
  cancelText = '취소',
  confirmText = '확인',
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  return (
    <div className={MODAL_STYLE.backdrop}>
      <div className={MODAL_STYLE.container}>
        <p className={MODAL_STYLE.message}>{message}</p>
        <div className={MODAL_STYLE.buttonGroup}>
          <button onClick={onCancel} className={MODAL_STYLE.cancelButton}>
            {cancelText}
          </button>
          <button onClick={onConfirm} className={MODAL_STYLE.button}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
