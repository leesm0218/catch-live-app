import { fetchLogout } from '@/api/logout';
import { PROFILE_STYLE as style } from '@/constants/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useCallback } from 'react';

export function LogOutButton() {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await fetchLogout();
    navigate(ROUTE_URL_FULL.LOGIN);
  }, [navigate]);

  return (
    <button onClick={handleLogout} className={style.button}>
      로그아웃
    </button>
  );
}
