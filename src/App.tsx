import { Routes, Route } from 'react-router-dom';
import { ROUTE_STRING } from '@/constants/routers';
import OauthRedirect from './pages/OauthRedirect';
import Login from './pages/Login';
import Home from './pages/Home';
import LoginErrorBoundary from './pages/Error/LoginErrorBoundary';
import Recording from './pages/Home/Recording';
import Signup from './pages/Signup';
import SignupComplete from './pages/SignupComplete';

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
        <Route
          path={ROUTE_STRING.SUBSCRIPTION}
          element={<div>구독 페이지 입니다</div>}
        />
        <Route path={ROUTE_STRING.RECORDING} element={<Recording />} />
        <Route
          path={ROUTE_STRING.NOTIFICATION}
          element={<div>알림 페이지 입니다</div>}
        />
        <Route
          path={ROUTE_STRING.PROFILE}
          element={<div>마이 페이지 입니다</div>}
        />
      </Route>
    </Routes>
  );
};

export default App;
