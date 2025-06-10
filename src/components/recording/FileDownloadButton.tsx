import { RECORDING_ITEM_STYLE } from '../../constants/styles';

const FileDownloadButton = () => {
  return (
    <button className={RECORDING_ITEM_STYLE.downloadButton}>
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
