import { LogOutButton, DeleteAccountButton } from '@/components/Button';
import { PROFILE_STYLE as style } from '@/constants/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useProfileQuery } from '@/hooks/useProfileQuery';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useProfileQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    if (error.message === '401') {
      navigate(ROUTE_URL_FULL.LOGIN);
    } else {
      return <div>오류 발생</div>;
    }
  }

  return (
    <div className={style.background}>
      <div className={style.info_list}>
        <div className={style.info_item}>
          <span className={style.info_label}>로그인 방식: </span>
          <span className={style.info_value}>{data.provider}</span>
        </div>
        <div className={style.info_item}>
          <span className={style.info_label}>이메일: </span>
          <span className={style.info_value}>{data.email}</span>
        </div>
        <div className={style.info_item}>
          <span className={style.info_label}>가입일: </span>
          <span className={style.info_value}>{data.createdAt}</span>
        </div>
      </div>
      <div className={style.button_box}>
        <LogOutButton />
        <DeleteAccountButton />
      </div>
    </div>
  );
};

export default ProfilePage;
