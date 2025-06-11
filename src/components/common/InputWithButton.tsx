import { INPUT_WITH_BUTTON_STYLE } from '@/constants/styles';

type InputWithButtonProps = {
  placeholder?: string;
  inputText?: string;
  buttonText?: string;
  onChange: (inputText: string) => void;
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

  return (
    <div className={INPUT_WITH_BUTTON_STYLE.container}>
      <input
        type="text"
        value={inputText}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onSubmit}
        className={INPUT_WITH_BUTTON_STYLE.input}
      />
      <button className={INPUT_WITH_BUTTON_STYLE.button}>{buttonText}</button>
    </div>
  );
};

export default InputWithButton;
