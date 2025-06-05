import { PROFILE_STYLE as style } from '@/constants/styles';

export function LogOutButton() {
  return <div className={style.BUTTON_LOGOUT}>로그아웃</div>;
}

export function DeleteAccountButton() {
  return <div className={style.BUTTON_DELETE_ACCOUNT}>회원탈퇴</div>;
}
