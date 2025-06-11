import { PLATFORMS, STATUSES } from '@/constants/recording';
import { FILTER_MODAL_STYLE } from '@/constants/styles';
import type { Platform, RecordingStatus } from '@/types/recording';
import { formatPlatformLabel, formatStatusLabel } from '@/utils/formatterUtils';
import { useState } from 'react';

type FilterModalProps = {
  initialPlatforms: Platform[];
  initialStatuses: RecordingStatus[];
  onClose: () => void;
  onApply: (value: {
    platforms: Platform[];
    recordingStatuses: RecordingStatus[];
  }) => void;
};

const FilterModal = (props: FilterModalProps) => {
  const { initialPlatforms, initialStatuses, onClose, onApply } = props;
  const [platforms, setPlatforms] = useState<Platform[]>(initialPlatforms);
  const [statuses, setStatuses] = useState<RecordingStatus[]>(initialStatuses);

  const toggleItem = <T extends string>(
    item: T,
    list: T[],
    setList: (v: T[]) => void
  ) => {
    setList(
      list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
    );
  };

  const handleReset = () => {
    setPlatforms([...PLATFORMS]);
    setStatuses([...STATUSES]);
  };

  return (
    <div className={FILTER_MODAL_STYLE.backdrop} onClick={onClose}>
      <div
        className={FILTER_MODAL_STYLE.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className={FILTER_MODAL_STYLE.header}>
          <h2 className={FILTER_MODAL_STYLE.title}>필터</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* 콘텐츠 */}
        <div className={FILTER_MODAL_STYLE.content}>
          <div>
            <h3 className={FILTER_MODAL_STYLE.sectionTitle}>플랫폼</h3>
            {PLATFORMS.map((platform) => (
              <label
                key={platform}
                className={FILTER_MODAL_STYLE.checkboxLabel}
              >
                <span>{formatPlatformLabel(platform)}</span>
                <input
                  type="checkbox"
                  checked={platforms.includes(platform)}
                  onChange={() => toggleItem(platform, platforms, setPlatforms)}
                  className={FILTER_MODAL_STYLE.checkbox}
                />
              </label>
            ))}
          </div>

          <div>
            <h3 className={FILTER_MODAL_STYLE.sectionTitle}>녹화 상태</h3>
            {STATUSES.map((status) => (
              <label key={status} className={FILTER_MODAL_STYLE.checkboxLabel}>
                <span>{formatStatusLabel(status)}</span>
                <input
                  type="checkbox"
                  checked={statuses.includes(status)}
                  onChange={() => toggleItem(status, statuses, setStatuses)}
                  className={FILTER_MODAL_STYLE.checkbox}
                />
              </label>
            ))}
          </div>
        </div>

        {/* 버튼 */}
        <div className={FILTER_MODAL_STYLE.footer}>
          <button
            onClick={handleReset}
            className={FILTER_MODAL_STYLE.resetButton}
          >
            초기화
          </button>
          <button
            onClick={() => onApply({ platforms, recordingStatuses: statuses })}
            className={FILTER_MODAL_STYLE.applyButton}
          >
            적용 하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default FilterModal;
