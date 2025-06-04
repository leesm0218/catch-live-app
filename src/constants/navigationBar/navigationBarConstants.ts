import { ROUTE_STRING, ROUTE_URL_FULL } from '../routers';

const assetLocation = '/';
const iconFile = '_normal.png';
const hoverIcon = '_hover.png';

export const IMAGELOCATION = {
  ICON_SUBSCRIPTION: assetLocation + ROUTE_STRING.SUBSCRIPTION + iconFile,
  ICON_SUBSCRIPTION_HOVER:
    assetLocation + ROUTE_STRING.SUBSCRIPTION + hoverIcon,
  ICON_RECORDING: assetLocation + ROUTE_STRING.RECORDING + iconFile,
  ICON_RECORDING_HOVER: assetLocation + ROUTE_STRING.RECORDING + hoverIcon,
  ICON_NOTIFICATION: assetLocation + ROUTE_STRING.NOTIFICATION + iconFile,
  ICON_NOTIFICATION_HOVER:
    assetLocation + ROUTE_STRING.NOTIFICATION + hoverIcon,
  ICON_PROFILE: assetLocation + ROUTE_STRING.PROFILE + iconFile,
  ICON_PROFILE_HOVER: assetLocation + ROUTE_STRING.PROFILE + hoverIcon,
};

export const NAVIGATION_BUTTON_LIST = [
  {
    navigationURL: ROUTE_URL_FULL.SUBSCRIPTION,
    alt: '구독 아이콘',
    icon: IMAGELOCATION.ICON_SUBSCRIPTION,
    hoverIcon: IMAGELOCATION.ICON_SUBSCRIPTION_HOVER,
    labelText: '구독',
  },
  {
    navigationURL: ROUTE_URL_FULL.RECORDING,
    alt: '녹화목록 아이콘',
    icon: IMAGELOCATION.ICON_RECORDING,
    hoverIcon: IMAGELOCATION.ICON_RECORDING_HOVER,
    labelText: '녹화목록',
  },
  {
    navigationURL: ROUTE_URL_FULL.NOTIFICATION,
    alt: '알림 아이콘',
    icon: IMAGELOCATION.ICON_NOTIFICATION,
    hoverIcon: IMAGELOCATION.ICON_NOTIFICATION_HOVER,
    labelText: '알림',
  },
  {
    navigationURL: ROUTE_URL_FULL.PROFILE,
    alt: '마이 페이지 아이콘',
    icon: IMAGELOCATION.ICON_PROFILE,
    hoverIcon: IMAGELOCATION.ICON_PROFILE_HOVER,
    labelText: '마이 페이지',
  },
];
