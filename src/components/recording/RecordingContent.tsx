import type { GetRecordingsParams } from '@/types/recording';
import RecordingItem from './RecordingItem';
import { useRecordingsQuery } from '@/hooks/useRecordingsQuery';

const RecordingContent = ({
  queryParams,
}: {
  queryParams: GetRecordingsParams;
}) => {
  const { data } = useRecordingsQuery(queryParams);

  return (
    <>
      {data?.recordings?.map((recording) => (
        <RecordingItem key={recording.liveSessionId} {...recording} />
      ))}
    </>
  );
};

export default RecordingContent;
