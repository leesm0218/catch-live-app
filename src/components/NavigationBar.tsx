import { ROUTEURL, IMAGELOCATION } from '../config/routes';
import { NavigationButton } from './NavigationButton';

const navigationButtons = [
  {
    navigationURL: ROUTEURL.SUBSCRIPTION,
    alt: '구독 아이콘',
    icon: IMAGELOCATION.SUBSCRIPTIONICON,
    hoverIcon: IMAGELOCATION.SUBSCRIPTIONHOVERICON,
    labelText: '구독',
  },
  {
    navigationURL: ROUTEURL.RECORDING,
    alt: '녹화목록 아이콘',
    icon: IMAGELOCATION.RECORDINGICON,
    hoverIcon: IMAGELOCATION.RECORDINGHOVERICON,
    labelText: '녹화목록',
  },
  {
    navigationURL: ROUTEURL.NOTIFICATION,
    alt: '알림 아이콘',
    icon: IMAGELOCATION.NOTIFICATIONICON,
    hoverIcon: IMAGELOCATION.NOTIFICATIONHOVERICON,
    labelText: '알림',
  },
  {
    navigationURL: ROUTEURL.PROFILE,
    alt: '마이 페이지 아이콘',
    icon: IMAGELOCATION.PROFILEICON,
    hoverIcon: IMAGELOCATION.PROFILEHOVERICON,
    labelText: '마이 페이지',
  },
];

const navigationBackgroundStyle =
 'fixed left-0 bottom-0 w-background flex justify-center';
const navigationConetentStyle = 'flex w-content h-navigationBar bg-purple-500';

export function NavigationBar() {
  return (
    <div className={navigationBackgroundStyle}>
      <div className={navigationConetentStyle}>
        {navigationButtons.map((props) => (
          <NavigationButton key={props.navigationURL} {...props} />
        ))}
      </div>
    </div>
  );
}
