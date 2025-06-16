import { fetchSignOut } from '@/api/signout';
import { PROFILE_STYLE as style } from '@/constants/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useCallback } from 'react';

export function SignoutButton() {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await fetchSignOut();
    navigate(ROUTE_URL_FULL.LOGIN);
  }, [navigate]);

  return (
    <button onClick={handleLogout} className={style.button}>
      회원탈퇴
    </button>
  );
}
