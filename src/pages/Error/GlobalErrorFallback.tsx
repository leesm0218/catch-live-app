import type { AxiosError } from 'axios';

const GlobalErrorFallback = ({ error }: { error?: AxiosError }) => {
  const status = error?.response?.status ?? 500;

  const getMessage = () => {
    switch (status) {
      case 401:
        return '로그인이 필요합니다.';
      case 403:
        return '접근 권한이 없습니다.';
      case 404:
        return '요청한 데이터를 찾을 수 없습니다.';
      case 429:
        return '요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.';
      case 500:
        return '서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.';
      default:
        return '클라이언트 오류가 발생했습니다.';
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-red-50 min-w-[60vh] min-h-[60vh] p-8 text-center text-red-800 rounded-lg shadow-md">
        <div className="text-5xl font-bold mb-4">{status}</div>
        <div className="text-xl font-semibold mb-2">{getMessage()}</div>
        <div className="text-sm text-gray-600 mb-6">
          문제가 계속되면 관리자에게 문의해 주세요.
        </div>
        <a
          href="/"
          className="mt-2 px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition"
        >
          메인으로 돌아가기
        </a>
      </div>
    </div>
  );
};

export default GlobalErrorFallback;
