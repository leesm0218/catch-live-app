import { PROFILE_STYLE as style } from '@/constants/styles';

export function LogOutButton() {
  return <div className={style.button}>로그아웃</div>;
}

export function DeleteAccountButton() {
  return <div className={style.button}>회원탈퇴</div>;
}
