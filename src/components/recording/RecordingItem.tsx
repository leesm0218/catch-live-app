import { RECORDING_ITEM_STYLE } from '../../constants/styles';
import type {
  LiveStatus,
  Platform,
  RecordingStatus,
} from '../../types/recording';
import FileDownloadButton from './FileDownloadButton';

type RecordingItemProps = {
  liveSessionId: number;
  title: string;
  videoUrl: string;
  startedAt: string | null;
  completedAt: string | null;
  liveStatus: LiveStatus;
  recordingStatus: RecordingStatus;
  channel: {
    platform: Platform;
    channelId: string;
    channelName: string;
  };
};

const RecordingItem = (props: RecordingItemProps) => {
  const { title, channel, liveStatus, recordingStatus, startedAt } = props;

  const getLiveStatusStyle = (status: LiveStatus) => {
    switch (status) {
      case 'LIVE':
        return RECORDING_ITEM_STYLE.liveStatus;
      case 'COMPLETED':
        return RECORDING_ITEM_STYLE.offlineStatus;
      case 'FAILED':
        return RECORDING_ITEM_STYLE.offlineStatus;
    }
  };

  const getLiveStatus = (status: LiveStatus) => {
    return status === 'LIVE' ? 'LIVE |' : '';
  };

  const getRecordingStatusStyle = (status: RecordingStatus) => {
    switch (status) {
      case 'RECORDING':
        return RECORDING_ITEM_STYLE.recordingStatus;
      case 'COMPLETED':
        return RECORDING_ITEM_STYLE.compeletedStatus;
      case 'FAILED':
        return RECORDING_ITEM_STYLE.failedStatus;
    }
  };

  return (
    <div className={RECORDING_ITEM_STYLE.container}>
      <div className={RECORDING_ITEM_STYLE.header}>
        <div className={RECORDING_ITEM_STYLE.headerLeft}>
          <span
            className={
              RECORDING_ITEM_STYLE.liveDot +
              ` ${getLiveStatusStyle(liveStatus)}`
            }
          />
          <span className={RECORDING_ITEM_STYLE.liveText}>
            {getLiveStatus(liveStatus)}
          </span>
          <span className={RECORDING_ITEM_STYLE.platformText}>
            {channel.platform}
          </span>
        </div>
        <span className={RECORDING_ITEM_STYLE.dateText}>{startedAt}</span>
      </div>
      <div className={RECORDING_ITEM_STYLE.titleRow}>
        <div className={RECORDING_ITEM_STYLE.titleText}>{title}</div>
        <span
          className={
            RECORDING_ITEM_STYLE.statusBadge +
            ` ${getRecordingStatusStyle(recordingStatus)}`
          }
        >
          {recordingStatus}
        </span>
      </div>
      <div className={RECORDING_ITEM_STYLE.footer}>
        <span className={RECORDING_ITEM_STYLE.channelText}>
          {channel.channelName}
        </span>
        <FileDownloadButton />
      </div>
    </div>
  );
};

export default RecordingItem;
