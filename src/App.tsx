import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { ROUTEURL } from './config/routes';

function SubscriptionPage() {
  return <div>구독 페이지</div>;
}
function RecordingPage() {
  return <div>녹화목록 페이지</div>;
}
function NotificationPage() {
  return <div>알림 페이지</div>;
}
function ProfilePage() {
  return <div>마이 페이지</div>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTEURL.SUBSCRIPTION} element={<SubscriptionPage />} />
        <Route path={ROUTEURL.RECORDING} element={<RecordingPage />} />
        <Route path={ROUTEURL.NOTIFICATION} element={<NotificationPage />} />
        <Route path={ROUTEURL.PROFILE} element={<ProfilePage />} />
      </Routes>
      <NavigationBar />
    </>
  );
}

export default App;
