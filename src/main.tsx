import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  type QueryClientConfig,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalErrorBoundary from './pages/Error/GlobalErrorBoundary.tsx';
import '@/index.css';
import App from '@/App.tsx';
import { API_RETRY_COUNT, API_STALE_TIME } from './constants/api.ts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: API_RETRY_COUNT,
      staleTime: API_STALE_TIME,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
    },
  },
} as QueryClientConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalErrorBoundary>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </GlobalErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
