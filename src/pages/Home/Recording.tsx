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
import FilterModal from '@/components/recording/FilterModal';
import SortModal from '@/components/recording/SortModal';
import type {
  FilterApplyValue,
  Platform,
  RecordingStatus,
  SortOption,
} from '@/types/recording';
import { PLATFORMS, STATUSES } from '@/constants/recording';

const Recording = () => {
  const [searchText, setSearchText] = useState('');
  const [queryParams, setQueryParams] = useState({});
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openSortModal, setOpenSortModal] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>('started_at:0');
  const [filterOption, setFilterOption] = useState<{
    platforms: Platform[];
    recordingStatuses: RecordingStatus[];
  }>({
    platforms: [...PLATFORMS],
    recordingStatuses: [...STATUSES],
  });

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
    setQueryParams((prev) => ({ ...prev, q: searchText }));
  };

  const handleClose = (type: string) => {
    if (type === 'filter') {
      setOpenFilterModal(false);
    }

    if (type === 'sort') {
      setOpenSortModal(false);
    }
  };

  const handleApply = (value: SortOption | FilterApplyValue, type: string) => {
    if (type === 'sort') {
      const sort = value as SortOption;
      const [sortBy, order] = sort.split(':');

      setSortOption(sort);
      setOpenSortModal(false);
      setQueryParams((prev) => ({ ...prev, sortBy, order }));
      return;
    }

    if (type === 'filter') {
      const { platforms, recordingStatuses } = value as FilterApplyValue;
      setOpenFilterModal(false);

      const isFilterEmpty =
        platforms.length === 0 && recordingStatuses.length === 0;
      const newPlatforms = isFilterEmpty ? [...PLATFORMS] : platforms;
      const newStatuses = isFilterEmpty ? [...STATUSES] : recordingStatuses;

      setFilterOption({
        platforms: newPlatforms,
        recordingStatuses: newStatuses,
      });

      setQueryParams((prev) => ({
        ...prev,
        platforms: newPlatforms.join(','),
        recordingStatuses: newStatuses.join(','),
      }));
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetText = (e.target as HTMLButtonElement).textContent;
    if (targetText === '필터') {
      setOpenFilterModal(true);
    }

    if (targetText === '정렬') {
      setOpenSortModal(true);
    }
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
          <FilterButton onClick={handleClick} />
          <SortButton onClick={handleClick} />
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

      {openFilterModal && (
        <FilterModal
          initialPlatforms={filterOption.platforms}
          initialStatuses={filterOption.recordingStatuses}
          onApply={(e) => handleApply(e, 'filter')}
          onClose={() => handleClose('filter')}
        />
      )}
      {openSortModal && (
        <SortModal
          onClose={() => handleClose('sort')}
          selected={sortOption}
          onApply={(e) => handleApply(e, 'sort')}
        />
      )}
    </div>
  );
};

export default Recording;
