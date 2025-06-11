export const SORT_MODAL_CONTENT_LIST = [
  { label: '최신순', value: 'started_at:0' },
  { label: '오래된순', value: 'started_at:1' },
  { label: '제목순', value: 'title:1' },
];
export const PLATFORMS = ['CHZZK', 'YOUTUBE'] as const;
export const STATUSES = ['RECORDING', 'COMPLETED', 'FAILED'] as const;
