import { fetchSignOut } from '@/api/signout';
import { PROFILE_STYLE as style } from '@/constants/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useCallback, useState } from 'react';
import {
  SIGNOUT_SUCCESS_MODAL_MESSAGE,
  SIGNOUT_FAIL_MODAL_MESSAGE,
} from '@/constants/signout/signout.constants';
import AlertModal from '@/components/common/AlertModal';
import { useAuthStore } from '@/stores/authStore';
import { clearToken } from '@/utils/authUtils';

export function SignoutButton() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState<string>('');
  const { setIsLoggedIn } = useAuthStore();

  const handleLogout = useCallback(async () => {
    try {
      await fetchSignOut();
      clearToken();
      setAlertMessage(SIGNOUT_SUCCESS_MODAL_MESSAGE);
    } catch {
      setAlertMessage(SIGNOUT_FAIL_MODAL_MESSAGE);
    }
  }, []);

  const handleClose = () => {
    setAlertMessage('');
    if (alertMessage === SIGNOUT_SUCCESS_MODAL_MESSAGE) {
      setIsLoggedIn(false);
      navigate(ROUTE_URL_FULL.LOGIN);
    }
  };

  return (
    <>
      <button onClick={handleLogout} className={style.button}>
        회원탈퇴
      </button>
      {alertMessage && (
        <AlertModal message={alertMessage} onClose={handleClose} />
      )}
    </>
  );
}
