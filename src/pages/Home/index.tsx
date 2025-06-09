export { NotificationPage } from '@/pages/Home/Notification';
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
