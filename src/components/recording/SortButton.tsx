import { ChevronDown } from 'lucide-react';
import { SORT_BUTTON_STYLE } from '../../constants/styles';

const SortButton = () => {
  return (
    <button className={SORT_BUTTON_STYLE.button}>
      정렬
      <ChevronDown size={20} />
    </button>
  );
};

export default SortButton;
