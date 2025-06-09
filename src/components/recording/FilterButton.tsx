import { Filter } from 'lucide-react';
import { FILTER_BUTTON_STYLE } from '../../constants/styles';

const FilterButton = () => {
  return (
    <button className={FILTER_BUTTON_STYLE.button}>
      <Filter size={16} />
      필터
    </button>
  );
};
export default FilterButton;
