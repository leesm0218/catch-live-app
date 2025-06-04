import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../../components/Footer';

export function Layout() {
  return (
    <>
      <Outlet />
      <NavigationBar />
    </>
  );
}
