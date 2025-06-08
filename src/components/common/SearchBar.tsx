import { SEARCH_BAR_STYLE } from '../../constants/styles';

type SearchBarProps = {
  placeholder?: string;
  text?: string;
  onChange: (text: string) => void;
  onEnterPress: () => void;
};

const SearchBar = (props: SearchBarProps) => {
  const {
    placeholder = '검색어를 입력해 주세요.',
    text,
    onChange,
    onEnterPress,
  } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <div className={SEARCH_BAR_STYLE.container}>
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className={SEARCH_BAR_STYLE.input}
      />
    </div>
  );
};

export default SearchBar;
