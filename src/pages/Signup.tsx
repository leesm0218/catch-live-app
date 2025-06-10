import Header from '@/components/common/Header';
import ProgressBar from '@/components/signup/ProgressBar';
import SignupButton from '@/components/signup/SignupButton';
import { SIGNUP_PAGE_STYLE } from '@/constants/styles';

const Signup = () => {
  return (
    <div className={SIGNUP_PAGE_STYLE.constainer}>
      <Header headerTitle="회원가입" />
      <ProgressBar />
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
        />
        <p className={SIGNUP_PAGE_STYLE.errorMessage}>중복된 닉네임입니다</p>
      </div>
      <SignupButton text="가입하기" onClick={() => {}} />
    </div>
  );
};

export default Signup;
