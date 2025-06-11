//navigationBar styles
export const NAVIGATION_STYLE = {
  background:
    'fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[720px] h-16 bg-purple-500 flex justify-center shadow-xl z-10',
  buttonList: 'flex w-full h-full items-center justify-around',
  button: 'flex-1 flex flex-col items-center justify-center',
  buttonImage: 'h-6 md:h-8 object-contain',
  buttonText: 'text-xs mt-1 font-bold',
};
//Layout styles
export const LAYOUT_STYLE = {
  screenLayout: 'h-screen flex flex-col',
  mainContainer: 'flex-1 overflow-y-auto flex justify-center pb-4',
  pageContent: 'w-full max-w-screen-md px-4',
};

//Recording styles
export const RECORDING_STYLE = {
  headerContainer: 'text-3xl font-bold text-center mb-2',
  pannelContainer: 'flex justify-between items-center px-4 mb-2',
  body: 'px-4 space-y-4',
};
//RecordingItem styles
export const RECORDING_ITEM_STYLE = {
  header: 'flex items-start justify-between',
  container: 'flex flex-col gap-1 p-4 rounded-xl shadow-sm border bg-white',
  headerLeft: 'flex items-center gap-2',
  liveDot: 'w-3 h-3 rounded-full',
  liveText: 'text-xs font-semibold text-black-600',
  platformText: 'text-xs font-semibold text-purple-600',
  dateText: 'text-xs text-gray-400',

  titleRow: 'flex items-center justify-between',
  titleText: 'text-base font-bold',
  statusBadge: 'px-2 py-0.5 text-xs rounded-full',
  footer: 'flex items-center justify-between',
  channelText: 'text-sm text-gray-600',
  downloadButton:
    'w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 hover:shadow-xl transition-transform duration-200',
  downloadIcon: 'w-6 h-6 text-gray-700',

  liveStatus: 'bg-red-500',
  offlineStatus: 'bg-gray-500',
  completedStatus: 'bg-green-100 text-green-700',
  recordingStatus: 'bg-yellow-100  text-yellow-700',
  failedStatus: 'bg-red-200 text-red-700',
};

//Header styles
export const HEADER_STYLE = {
  titleContainer: 'p-4 pb-2',
  titleText: 'text-3xl font-bold text-center mb-2',
};

//SearchBar styles
export const SEARCH_BAR_STYLE = {
  container: 'p-4 pb-2',
  input:
    'w-full rounded-xl text-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
};

//FilterButton styles
export const FILTER_BUTTON_STYLE = {
  button:
    'w-1/2 flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-300 text-sm',
};

//SortButton styles
export const SORT_BUTTON_STYLE = {
  button:
    'w-1/2 flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-300 text-sm',
};

//LoadingSpinner styles
export const LOADING_SPINNER_STYLE = {
  container: 'flex justify-center items-center h-48',
  button: 'animate-spin rounded-full border-4 border-solid border-gray-200',
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

export const SIGNUP_PAGE_STYLE = {
  constainer: 'max-w-md mx-auto mt-24 p-6',
  progressBarbox: 'w-full h-1 bg-gray-2,00 rounded-full mb-10',
  progressBar: 'h-1 w-1/2 bg-purple-500 rounded-full',
  progressBarComplete: 'h-1 bg-purple-500 rounded-full',
  h2: 'text-lg font-bold mb-10 text-left',
  form: 'mb-10',
  label: 'block text-sm font-medium text-gray-700 mb-2',
  input:
    'w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500',
  button:
    'w-full py-4 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 transition disabled:opacity-50',
  errorMessage: 'text-sm text-red-500 mt-2 h-[20px]',
  contentBox: 'flex flex-col items-center justify-center flex-1 py-12',
  checkIconCircle:
    'w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-6',
  checkIcon: 'w-8 h-8 text-white',
  paragraph: 'text-center text-base font-medium',
  bold: 'font-bold',
};
