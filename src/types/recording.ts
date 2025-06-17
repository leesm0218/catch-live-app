// dto 관련
export interface RecordingResponse {
  recordings: RecordingData[];
  nextCursor: string | null;
}

export interface RecordingData {
  liveSessionId: number;
  recordingId: number;
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
export type SortOption = 'started_at:0' | 'started_at:1' | 'title:1';
export type FilterApplyValue = {
  platforms: Platform[];
  recordingStatuses: RecordingStatus[];
};

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
