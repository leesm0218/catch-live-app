// dto 관련
export interface RecordingResponse {
  recordings: RecordingData[];
  nextCursor: string | null;
}

export interface RecordingData {
  liveSessionId: number;
  title: string;
  videoUrl: string;
  startedAt: string | null;
  completedAt: string | null;
  liveStatus: LiveStatus;
  recordingStatus: RecordingStatus;
  channel: channel;
}

export interface channel {
  platform: Platform;
  channelId: string;
  channelName: string;
}

// enum type 관련
export type Platform = 'CHZZK' | 'YOUTUBE';
export type RecordingStatus = 'RECORDING' | 'COMPLETED' | 'FAILED';
export type LiveStatus = 'LIVE' | 'COMPLETED' | 'FAILED';

// api 관련
export type GetRecordingsParams = {
  q?: string;
  recordingStatuses?: RecordingStatus;
  platforms?: Platform;
  sortBy?: 'started_at' | 'title';
  order?: 0 | 1;
  cursor?: string;
  size?: number;
};
