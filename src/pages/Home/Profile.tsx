import { LogOutButton, DeleteAccountButton } from '@/components/Button';
import { PROFILE_STYLE as style } from '@/constants/styles';

export const ProfilePage = () => {
  return (
    <div className={style.BACKGROUND}>
      <div className={style.TITLE}> title</div>
      <div>provider</div>
      <div>email</div>
      <div>createdAt</div>
      <div className={style.BUTTON_BOX}>
        <LogOutButton />
        <DeleteAccountButton />
      </div>
    </div>
  );
};
