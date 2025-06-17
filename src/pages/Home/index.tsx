import Header from '@/components/common/Header';
import NavigationBar from '@/components/common/NavigationBar';
import { useLocation, Outlet } from 'react-router-dom';
import { ROUTE_STRING } from '@/constants/routers';
import { LAYOUT_STYLE } from '@/constants/styles';

const Home = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/');
  const subPath = pathSegments[pathSegments.length - 1];

  const getTitle = (path: string) => {
    switch (path) {
      case ROUTE_STRING.SUBSCRIPTION:
        return '구독';
      case ROUTE_STRING.RECORDING:
        return '녹화 목록';
      case ROUTE_STRING.NOTIFICATION:
        return '알림 목록';
      case ROUTE_STRING.PROFILE:
        return '마이 페이지';
    }
    return '';
  };

  return (
    <div className={LAYOUT_STYLE.screenLayout}>
      <div className={LAYOUT_STYLE.mainContainer}>
        <div className={LAYOUT_STYLE.pageContent}>
          <Header headerTitle={getTitle(subPath)} />
          <Outlet />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default Home;
