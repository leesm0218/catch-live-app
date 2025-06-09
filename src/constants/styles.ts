//navigationBar styles
export const NAVIGATION_STYLE = {
  BACKGROUND: 'fixed left-0 bottom-0 w-background flex justify-center',
  BUTTON_LIST: 'flex w-content h-navigationBar bg-purple-500',
  BUTTON: 'flex-1 flex flex-col h-full min-h-0 pb-4',
  BUTTON_IMAGE: 'flex-[8_0_0%] min-h-0 object-contain',
  BUTTON_TEXT: 'flex-1 min-h-0',
};

//profile styles
export const PROFILE_STYLE = {
  BACKGROUND: 'flex-1 flex flex-col justify-center items-center',
  TITLE: 'top-0 left-0 width-content height-[60px]',
  BUTTON_BOX: 'flex w-content flex-row justify-stretch items-center',
  BUTTON_LOGOUT: 'flex-1 text-center',
  BUTTON_DELETE_ACCOUNT: 'flex-1 text-center',
};

export const HEADER_STYLE = {
  titleContainer: 'p-4 pb-2',
  titleText: 'text-3xl font-bold text-center mb-2',
};

export const LOGIN_STYLE = {
  loginBox: 'flex flex-col items-center justify-center h-screen',
  paragraph: 'text-gray-500 mb-6',
  buttonBox: 'flex gap-6',
  button: 'w-full h-full object-cover rounded-full',
  loading: 'flex flex-col items-center justify-center h-screen',
};

export const LOGIN_ERROR_FALLBACK_STYLE = {
  container: 'flex flex-col items-center justify-center min-h-screen p-4',
  title: 'text-2xl font-bold mb-4',
  paragraph: 'text-red-500 mb-8',
  button: 'px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600',
};
