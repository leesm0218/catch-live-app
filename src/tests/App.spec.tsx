import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ROUTE_URL_FULL } from '../constants/routers';
import App from '../App';
import * as authStoreModule from '@/stores/authStore';

vi.mock('@/hooks/useProfileQuery', () => ({
  useProfileQuery: () => ({
    data: {
      provider: 'KAKAO',
      email: 'test@example.com',
      createdAt: '2024-06-17',
    },
    isLoading: false,
    error: null,
  }),
}));
const mockNotifications = [
  {
    notificationId: 1,
    content: '테스트 알림 1',
    createdAt: '2024-06-17 12:00',
  },
  {
    notificationId: 2,
    content: '테스트 알림 2',
    createdAt: '2024-06-17 13:00',
  },
];

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(authStoreModule, 'useAuthStore').mockReturnValue({
      isLoggedIn: true,
      setIsLoggedIn: vi.fn(),
    });
  });

  it('첫 화면이 로그인 URL 화면인지 확인', () => {
    vi.spyOn(authStoreModule, 'useAuthStore').mockReturnValue({
      isLoggedIn: false,
      setIsLoggedIn: vi.fn(),
    });

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

  it('구독 페이지가 정상적으로 출력되는지 확인', async () => {
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
    expect(screen.getByText('알림')).toBeInTheDocument();

    await user.click(screen.getByText('마이 페이지'));
    expect(
      screen.getByRole('heading', { name: '마이 페이지' })
    ).toBeInTheDocument();
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

  it.skip('알림 페이지가 정상적으로 출력되는지 확인', async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[ROUTE_URL_FULL.NOTIFICATION]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );

    vi.mock('@/hooks/useNotificationInfiniteQuery', () => ({
      useNotificationInfiniteQuery: () => ({
        data: {
          pages: [{ notifications: mockNotifications, nextCursor: null }],
          pageParams: [null],
        },
        fetchNextPage: vi.fn(),
        hasNextPage: false,
        isFetchingNextPage: false,
        error: null,
      }),
    }));

    expect(
      await screen.findByText(mockNotifications[0].content)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(mockNotifications[1].content)
    ).toBeInTheDocument();
  });

  it('마이 페이지가 정상적으로 출력되는지 확인', async () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[ROUTE_URL_FULL.PROFILE]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getByText(/KAKAO/)).toBeInTheDocument();
    expect(screen.getByText('로그아웃')).toBeInTheDocument();
    expect(screen.getByText('회원탈퇴')).toBeInTheDocument();
  });
});
