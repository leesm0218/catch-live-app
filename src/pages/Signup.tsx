import Header from '@/components/common/Header';
import ProgressBar from '@/components/signup/ProgressBar';
import SignupButton from '@/components/signup/SignupButton';
import { SIGNUP_PAGE_STYLE } from '@/constants/styles';
import useSignupMutation from '@/hooks/useSignupMutation';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Signup = () => {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const location = useLocation();
  const { provider, email } = location.state;

  const onErrorCallback = (errorCode: string) => {
    if (errorCode === '3400') {
      setErrorMessage('닉네임은 2-10자 사이여야 합니다.');
    } else if (errorCode === '3401') {
      setErrorMessage('중복된 닉네임입니다.');
    } else {
      setErrorMessage('회원가입 중 오류가 발생했습니다.');
    }
  };

  const { mutateSignup, isPending } = useSignupMutation(onErrorCallback);

  const handleClick = async () => {
    const nickname = nicknameRef.current?.value;

    if (!nickname) {
      setErrorMessage('닉네임을 입력해주세요.');
      return;
    }

    setErrorMessage('');

    mutateSignup({ provider, email, nickname });
  };

  return (
    <div className={SIGNUP_PAGE_STYLE.container}>
      <Header headerTitle="회원가입" />
      <ProgressBar progress="half" />
      <h2 className={SIGNUP_PAGE_STYLE.h2}>닉네임을 입력해주세요.</h2>
      <div className={SIGNUP_PAGE_STYLE.form}>
        <label htmlFor="nickname" className={SIGNUP_PAGE_STYLE.label}>
          닉네임
        </label>
        <input
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요."
          className={SIGNUP_PAGE_STYLE.input}
          ref={nicknameRef}
        />
        <p className={SIGNUP_PAGE_STYLE.errorMessage}>{errorMessage}</p>
      </div>
      <SignupButton
        text={isPending ? '가입중...' : '가입하기'}
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
};

export default Signup;
