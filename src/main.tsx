import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalErrorBoundary from './pages/Error/GlobalErrorBoundary.tsx';

const queryClient = new QueryClient();

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
