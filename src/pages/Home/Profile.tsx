import { SignoutButton } from '@/components/Signout/SignoutButton';
import { LogOutButton } from '@/components/Logout/LogoutButton';
import { PROFILE_STYLE as style } from '@/constants/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useProfileQuery } from '@/hooks/useProfileQuery';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useEffect, useState } from 'react';
import { toKstDate } from '@/utils/dateUtils';
import AlertModal from '@/components/common/AlertModal';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useProfileQuery();
  const [alertMessage, setAlertMessage] = useState<string>('');

  useEffect(() => {
    if (error?.message === '401') {
      navigate(ROUTE_URL_FULL.LOGIN);
    } else if (error) {
      setAlertMessage('프로필 정보를 불러오는 데 실패했습니다.');
    }
  }, [error, navigate]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return <div>오류 발생</div>;
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
          <span className={style.info_value}>{toKstDate(data.createdAt)}</span>
        </div>
      </div>
      <div className={style.button_box}>
        <LogOutButton />
        <SignoutButton />
      </div>
      {alertMessage && (
        <AlertModal
          message={alertMessage}
          onClose={() => setAlertMessage('')}
        />
      )}
    </div>
  );
};

export default ProfilePage;
