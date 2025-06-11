import type { Platform, RecordingStatus } from '@/types/recording';

export const formatPlatformLabel = (platform: Platform) => {
  switch (platform) {
    case 'YOUTUBE':
      return '유튜브';
    case 'CHZZK':
      return '치지직';
    default:
      return platform;
  }
};

export const formatStatusLabel = (status: RecordingStatus) => {
  switch (status) {
    case 'RECORDING':
      return '녹화 중';
    case 'COMPLETED':
      return '녹화 완료';
    case 'FAILED':
      return '녹화 실패';
    default:
      return status;
  }
};
