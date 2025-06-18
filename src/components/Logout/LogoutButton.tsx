import { fetchLogout } from '@/api/logout';
import { PROFILE_STYLE as style } from '@/constants/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useCallback, useState } from 'react';
import {
  LOGOUT_SUCCESS_MODAL_MESSAGE,
  LOGOUT_FAIL_MODAL_MESSAGE,
} from '@/constants/logout/logout.constants';
import AlertModal from '@/components/common/AlertModal';
import { useAuthStore } from '@/stores/authStore';
import { clearToken } from '@/utils/authUtils';

export function LogOutButton() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState<string>('');
  const { setIsLoggedIn } = useAuthStore();

  const handleLogout = useCallback(async () => {
    try {
      await fetchLogout();
      clearToken();
      setAlertMessage(LOGOUT_SUCCESS_MODAL_MESSAGE);
    } catch {
      setAlertMessage(LOGOUT_FAIL_MODAL_MESSAGE);
    }
  }, []);

  const handleClose = () => {
    setAlertMessage('');
    if (alertMessage === LOGOUT_SUCCESS_MODAL_MESSAGE) {
      setIsLoggedIn(false);
      navigate(ROUTE_URL_FULL.LOGIN);
    }
  };

  return (
    <>
      <button onClick={handleLogout} className={style.button}>
        로그아웃
      </button>
      {alertMessage && (
        <AlertModal message={alertMessage} onClose={handleClose} />
      )}
    </>
  );
}
