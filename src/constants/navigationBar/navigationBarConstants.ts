import { ROUTE_STRING, ROUTE_URL_FULL } from '../routers';

//assetLocation alwasy must same absolute path
const assetLocation = '/src/assets/';
const navigationImageGlob = import.meta.glob('@/assets/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const getIcon = (fileName: string) => {
  return navigationImageGlob[assetLocation + fileName + '_normal.png'];
};

const getHoverIcon = (fileName: string) => {
  return navigationImageGlob[assetLocation + fileName + '_hover.png'];
};

export const NAVIGATION_BUTTON_LIST = [
  {
    navigationURL: ROUTE_URL_FULL.SUBSCRIPTION,
    alt: '구독 아이콘',
    icon: getIcon(ROUTE_STRING.SUBSCRIPTION),
    hoverIcon: getHoverIcon(ROUTE_STRING.SUBSCRIPTION),
    labelText: '구독',
  },
  {
    navigationURL: ROUTE_URL_FULL.RECORDING,
    alt: '녹화목록 아이콘',
    icon: getIcon(ROUTE_STRING.RECORDING),
    hoverIcon: getHoverIcon(ROUTE_STRING.RECORDING),
    labelText: '녹화목록',
  },
  {
    navigationURL: ROUTE_URL_FULL.NOTIFICATION,
    alt: '알림 아이콘',
    icon: getIcon(ROUTE_STRING.NOTIFICATION),
    hoverIcon: getHoverIcon(ROUTE_STRING.NOTIFICATION),
    labelText: '알림',
  },
  {
    navigationURL: ROUTE_URL_FULL.PROFILE,
    alt: '마이 페이지 아이콘',
    icon: getIcon(ROUTE_STRING.PROFILE),
    hoverIcon: getHoverIcon(ROUTE_STRING.PROFILE),
    labelText: '마이 페이지',
  },
];
