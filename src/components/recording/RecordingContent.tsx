import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useRecordingsInfiniteQuery } from '@/hooks/useRecordingsQuery';
import type { GetRecordingsParams, RecordingData } from '@/types/recording';
import { throttle } from 'lodash';
import { useCallback } from 'react';
import RecordingItem from './RecordingItem';

const RecordingContent = ({
  queryParams,
}: {
  queryParams: GetRecordingsParams;
}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useRecordingsInfiniteQuery(queryParams);

  const throttledFetchNextPage = useCallback(
    throttle(
      () => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      1000,
      { trailing: true }
    ),
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  const observerRef = useInfiniteScroll({
    onIntersect: throttledFetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
    threshold: 1,
  });

  return (
    <>
      {data?.map((recording: RecordingData) => (
        <RecordingItem key={recording.recordingId} {...recording} />
      ))}
      {hasNextPage && (
        <div
          ref={observerRef}
          style={{ height: 2, background: 'transparent' }}
        />
      )}
    </>
  );
};

export default RecordingContent;
