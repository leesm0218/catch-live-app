export { ProfilePage } from '@/pages/Home/Profile';
import NavigationBar from '@/components/common/NavigationBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Outlet />
      <NavigationBar />
    </>
  );
};

export default Home;
