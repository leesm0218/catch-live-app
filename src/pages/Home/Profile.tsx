import { LogOutButton, DeleteAccountButton } from '@/components/Button';
import { PROFILE_STYLE as style } from '@/constants/styles';
import { useQuery } from '@tanstack/react-query';

const profileApiUrl = import.meta.env.VITE_API_BASE_URL + 'users/me';

const fetchProfile = async () => {
  const url = profileApiUrl;
  const res = await fetch(url, {
    headers: {},
  });
  if (!res.ok) {
    throw new Error('유저 정보를 불러올 수 없습니다.');
  }
  const json = await res.json();
  return json.data;
};

export const ProfilePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [''],
    queryFn: () => fetchProfile(),
  });

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (error) {
    return <div>오류 발생</div>;
  }

  if (!data) {
    return <div>오류 발생</div>;
  }

  return (
    <div className={style.BACKGROUND}>
      <div className={style.TITLE}> title</div>
      <div>{data.provider}</div>
      <div>{data.email}</div>
      <div>{data.createdAt}</div>
      <div className={style.BUTTON_BOX}>
        <LogOutButton />
        <DeleteAccountButton />
      </div>
    </div>
  );
};
