import { SORT_MODAL_CONTENT_LIST } from '@/constants/recording';
import { SORT_MODAL_STYLE } from '@/constants/styles';
import type { SortOption } from '@/types/recording';
import { useState } from 'react';

type SortModalProps = {
  selected: SortOption;
  onClose: () => void;
  onApply: (value: SortOption) => void;
};

const SortModal = (props: SortModalProps) => {
  const { selected, onClose, onApply } = props;
  const [value, setValue] = useState<SortOption>(selected);

  return (
    <div className={SORT_MODAL_STYLE.backdrop} onClick={onClose}>
      <div
        className={SORT_MODAL_STYLE.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className={SORT_MODAL_STYLE.header}>
          <h2 className={SORT_MODAL_STYLE.title}>정렬 기준</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* 콘텐츠 영역 */}
        <div className={SORT_MODAL_STYLE.content}>
          {SORT_MODAL_CONTENT_LIST.map(({ label, value: optionValue }) => (
            <label key={optionValue} className={SORT_MODAL_STYLE.label}>
              <span>{label}</span>
              <input
                type="radio"
                name="sort"
                checked={value === optionValue}
                onChange={() => setValue(optionValue as SortOption)}
                className={SORT_MODAL_STYLE.input}
              />
            </label>
          ))}
        </div>

        <div className={SORT_MODAL_STYLE.divider}>
          <button onClick={onClose} className={SORT_MODAL_STYLE.cancelButton}>
            닫기
          </button>
          <button
            onClick={() => onApply(value)}
            className={SORT_MODAL_STYLE.applyButton}
          >
            적용 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
