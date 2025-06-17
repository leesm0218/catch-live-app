import { INPUT_WITH_BUTTON_STYLE } from '@/constants/styles';

type InputWithButtonProps = {
  placeholder?: string;
  inputText?: string;
  buttonText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const InputWithButton = (props: InputWithButtonProps) => {
  const {
    placeholder = '검색어를 입력해 주세요.',
    inputText,
    buttonText = '확인',
    onChange,
    onSubmit,
  } = props;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className={INPUT_WITH_BUTTON_STYLE.container}>
      <input
        type="text"
        value={inputText}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className={INPUT_WITH_BUTTON_STYLE.input}
      />
      <button onClick={onSubmit} className={INPUT_WITH_BUTTON_STYLE.button}>
        {buttonText}
      </button>
    </div>
  );
};

export default InputWithButton;
