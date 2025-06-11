import { Filter } from 'lucide-react';
import { FILTER_BUTTON_STYLE } from '../../constants/styles';

type FilterButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const FilterButton = (props: FilterButtonProps) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className={FILTER_BUTTON_STYLE.button}>
      <Filter size={16} />
      필터
    </button>
  );
};
export default FilterButton;
