import { useQuery } from '@tanstack/react-query';
import { getRecordings } from '../../api/recording';
import { useState } from 'react';
import { API_STALE_TIME } from '../../constants/api';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { RECORDING_STYLE } from '@/constants/styles';
import ErrorFallback from '../Error/ErrorFallback';
import SearchBar from '@/components/common/SearchBar';
import FilterButton from '@/components/recording/FilterButton';
import SortButton from '@/components/recording/SortButton';
import RecordingItem from '@/components/recording/RecordingItem';

const Recording = () => {
  const [searchText, setSearchText] = useState('');
  const [queryParams, setQueryParams] = useState({});

  const { data, isError, isLoading } = useQuery({
    queryKey: ['recordings', queryParams],
    queryFn: getRecordings,
    staleTime: API_STALE_TIME,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    select: (res) => res.data,
  });

  if (isError) {
    return <ErrorFallback message="데이터를 불러올 수 없습니다." />;
  }

  const handleEnterPress = () => {
    setQueryParams({ q: searchText });
  };

  return (
    <div>
      <div className={RECORDING_STYLE.headerContainer}>
        <SearchBar
          text={searchText}
          onChange={setSearchText}
          onEnterPress={handleEnterPress}
        />
        <div className={RECORDING_STYLE.pannelContainer}>
          <FilterButton />
          <SortButton />
        </div>
      </div>
      <div className={RECORDING_STYLE.body}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          data?.recordings?.map((recording) => {
            return (
              <RecordingItem key={recording.liveSessionId} {...recording} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Recording;
