import { ROUTEURL, ROUTESTRING } from '../routers';

const assetLocation = '/';
const iconFile = '_normal.png';
const hoverIcon = '_hover.png';

export const IMAGELOCATION = {
  SUBSCRIPTIONICON: assetLocation + ROUTESTRING.SUBSCRIPTION + iconFile,
  SUBSCRIPTIONHOVERICON: assetLocation + ROUTESTRING.SUBSCRIPTION + hoverIcon,
  RECORDINGICON: assetLocation + ROUTESTRING.RECORDING + iconFile,
  RECORDINGHOVERICON: assetLocation + ROUTESTRING.RECORDING + hoverIcon,
  NOTIFICATIONICON: assetLocation + ROUTESTRING.NOTIFICATION + iconFile,
  NOTIFICATIONHOVERICON: assetLocation + ROUTESTRING.NOTIFICATION + hoverIcon,
  PROFILEICON: assetLocation + ROUTESTRING.PROFILE + iconFile,
  PROFILEHOVERICON: assetLocation + ROUTESTRING.PROFILE + hoverIcon,
};

export const navigationButtons = [
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
