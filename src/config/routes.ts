const ROUTESTRING = {
  SUBSCRIPTION: 'subscription',
  RECORDING: 'recording',
  NOTIFICATION: 'notification',
  PROFILE: 'profile',
};

export const ROUTEURL = {
  SUBSCRIPTION: '/' + ROUTESTRING.SUBSCRIPTION,
  RECORDING: '/' + ROUTESTRING.RECORDING,
  NOTIFICATION: '/' + ROUTESTRING.NOTIFICATION,
  PROFILE: '/' + ROUTESTRING.PROFILE,
};

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

export const maxContentWidth = 480;
