import { SIGNUP_PAGE_STYLE } from '@/constants/styles';

interface SignupButtonProps {
  text: string;
  onClick: () => void;
}

const SignupButton = ({ text, onClick }: SignupButtonProps) => {
  return (
    <button className={SIGNUP_PAGE_STYLE.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default SignupButton;
