import { Outlet } from 'react-router-dom';
import { NavigationBar } from '@/components/Footer';

export const Layout = () => {
  return (
    <>
      <Outlet />
      <NavigationBar />
    </>
  );
};
