import { ChevronDown } from 'lucide-react';
import { SORT_BUTTON_STYLE } from '../../constants/styles';

type FilterButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SortButton = (props: FilterButtonProps) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className={SORT_BUTTON_STYLE.button}>
      정렬
      <ChevronDown size={20} />
    </button>
  );
};

export default SortButton;
