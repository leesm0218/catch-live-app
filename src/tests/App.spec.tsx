import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect } from 'vitest';
import { ROUTE_URL_FULL } from '../constants/routers';
import App from '../App';

describe('App', () => {
  it('첫 화면이 로그인 URL 화면인지 확인', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getByText('로그인')).toBeInTheDocument();
  });

  it.skip('구독 페이지가 정상적으로 출력되는지 확인', async () => {
    const user = userEvent.setup();
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[ROUTE_URL_FULL.SUBSCRIPTION]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await user.click(screen.getByText('녹화목록'));
    expect(screen.getByText('녹화목록')).toBeInTheDocument();

    await user.click(screen.getByText('알림'));
    expect(screen.getByText('알림 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('마이 페이지'));
    expect(screen.getByText('마이 페이지 입니다')).toBeInTheDocument();
  });

  it.skip('녹화목록 페이지가 정상적으로 출력되는지 확인', async () => {
    const user = userEvent.setup();
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[ROUTE_URL_FULL.RECORDING]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getByText('녹화목록')).toBeInTheDocument();

    await user.click(screen.getByText('구독'));

    await user.click(screen.getByText('알림'));
    expect(screen.getByText('알림 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('마이 페이지'));
    expect(screen.getByText('마이 페이지 입니다')).toBeInTheDocument();
  });

  it('알림 페이지가 정상적으로 출력되는지 확인', async () => {
    const user = userEvent.setup();
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[ROUTE_URL_FULL.NOTIFICATION]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getByText('알림 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('구독'));

    await user.click(screen.getByText('녹화목록'));
    expect(screen.getByText('녹화목록')).toBeInTheDocument();

    await user.click(screen.getByText('마이 페이지'));
    expect(screen.getByText('마이 페이지 입니다')).toBeInTheDocument();
  });

  it.skip('마이 페이지가 정상적으로 출력되는지 확인', async () => {
    const user = userEvent.setup();
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[ROUTE_URL_FULL.PROFILE]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getAllByText('마이 페이지 입니다')[0]).toBeInTheDocument();

    await user.click(screen.getByText('구독'));

    await user.click(screen.getByText('녹화목록'));
    expect(screen.getByText('녹화목록')).toBeInTheDocument();

    await user.click(screen.getByText('알림'));
    expect(screen.getByText('알림 페이지 입니다')).toBeInTheDocument();
  });
});
