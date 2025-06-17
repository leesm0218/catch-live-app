import { fetchSignOut } from '@/api/signout';
import { PROFILE_STYLE as style } from '@/constants/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useCallback } from 'react';
import { clearLocalStorage } from '@/utils/clearLocalStorage';
import { clearCookie } from '@/utils/clearCookie';

export function SignoutButton() {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await fetchSignOut();
    clearCookie();
    clearLocalStorage();
    navigate(ROUTE_URL_FULL.LOGIN);
  }, [navigate]);

  return (
    <button onClick={handleLogout} className={style.button}>
      회원탈퇴
    </button>
  );
}
