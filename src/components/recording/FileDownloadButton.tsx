import type { RecordingStatus } from '@/types/recording';
import { RECORDING_ITEM_STYLE } from '../../constants/styles';

type FileDownloadProps = {
  videoUrl: string;
  status: RecordingStatus;
};

const FileDownloadButton = (props: FileDownloadProps) => {
  const { videoUrl, status } = props;
  const isDisabled = status !== 'COMPLETED';

  const handleDownload = () => {
    if (!videoUrl) return;
    const a = document.createElement('a');
    a.href = videoUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDisabled}
      className={`${RECORDING_ITEM_STYLE.downloadButton} ${
        isDisabled ? `${RECORDING_ITEM_STYLE.disable}` : ''
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={RECORDING_ITEM_STYLE.downloadIcon}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
        />
      </svg>
    </button>
  );
};

export default FileDownloadButton;
