import { Routes, Route } from 'react-router-dom';
import { ROUTE_STRING } from '@/constants/routers';
import OauthRedirect from './pages/OauthRedirect';
import Login from './pages/Login';
import Home from './pages/Home';
import LoginErrorBoundary from './pages/Error/LoginErrorBoundary';
import Recording from './pages/Home/Recording';
import NotificationPage from '@/pages/Home/Notification';
import Signup from './pages/Signup';
import SignupComplete from './pages/SignupComplete';
import Subscription from './pages/Home/Subscription';
import '@/api/axiosInterceptors';

import ProfilePage from '@/pages/Home/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path={ROUTE_STRING.OAUTH_REDIRECT}
        element={
          <LoginErrorBoundary>
            <OauthRedirect />
          </LoginErrorBoundary>
        }
      />
      <Route path={ROUTE_STRING.LOGIN} element={<Login />} />
      <Route path={ROUTE_STRING.SIGNUP} element={<Signup />} />
      <Route path={ROUTE_STRING.SIGNUP_COMPLETE} element={<SignupComplete />} />
      <Route path={ROUTE_STRING.HOME} element={<Home />}>
        <Route path={ROUTE_STRING.SUBSCRIPTION} element={<Subscription />} />
        <Route path={ROUTE_STRING.RECORDING} element={<Recording />} />
        <Route
          path={ROUTE_STRING.NOTIFICATION}
          element={<NotificationPage />}
        />
        <Route path={ROUTE_STRING.PROFILE} element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;
