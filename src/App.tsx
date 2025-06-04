import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Home/layout';
import { ROUTEURL } from './constants/routers';

function App() {
  console.log('login? = ', ROUTEURL.LOGIN);
  return (
    <Routes>
      <Route path="/" element={<div>로그인 페이지 입니다</div>} />
      <Route path={ROUTEURL.LOGIN} element={<div>로그인 페이지 입니다</div>} />
      <Route
        path={ROUTEURL.SIGNUP}
        element={<div>회원가입 페이지 입니다</div>}
      />
      <Route element={<Layout />}>
        <Route
          path={ROUTEURL.SUBSCRIPTION}
          element={<div>구독 페이지 입니다</div>}
        />
        <Route
          path={ROUTEURL.RECORDING}
          element={<div>녹화목록 페이지 입니다</div>}
        />
        <Route
          path={ROUTEURL.NOTIFICATION}
          element={<div>알림 페이지 입니다</div>}
        />
        <Route
          path={ROUTEURL.PROFILE}
          element={<div>마이 페이지 입니다</div>}
        />
      </Route>
    </Routes>
  );
}

export default App;
