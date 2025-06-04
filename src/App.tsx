import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Home/Layout';
import { ROUTE_STRING } from './constants/routers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>로그인 페이지 입니다</div>} />
      <Route
        path={ROUTE_STRING.LOGIN}
        element={<div>로그인 페이지 입니다</div>}
      />
      <Route
        path={ROUTE_STRING.SIGNUP}
        element={<div>회원가입 페이지 입니다</div>}
      />
      <Route path={ROUTE_STRING.HOME} element={<Layout />}>
        <Route
          path={ROUTE_STRING.SUBSCRIPTION}
          element={<div>구독 페이지 입니다</div>}
        />
        <Route
          path={ROUTE_STRING.RECORDING}
          element={<div>녹화목록 페이지 입니다</div>}
        />
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
}

export default App;
