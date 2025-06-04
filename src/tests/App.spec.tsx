import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ROUTEURL } from '../constants/routers';
import App from '../App';

describe('App', () => {
  it('첫 화면이 로그인 URL 화면인지 확인', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('로그인 페이지 입니다')).toBeInTheDocument();
  });

  it('구독 페이지가 정상적으로 출력되는지 확인', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={[ROUTEURL.SUBSCRIPTION]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('구독 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('녹화목록'));
    expect(screen.getByText('녹화목록 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('알림'));
    expect(screen.getByText('알림 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('마이 페이지'));
    expect(screen.getByText('마이 페이지 입니다')).toBeInTheDocument();
  });

  it('녹화목록 페이지가 정상적으로 출력되는지 확인', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={[ROUTEURL.RECORDING]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('녹화목록 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('구독'));
    expect(screen.getByText('구독 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('알림'));
    expect(screen.getByText('알림 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('마이 페이지'));
    expect(screen.getByText('마이 페이지 입니다')).toBeInTheDocument();
  });

  it('알림 페이지가 정상적으로 출력되는지 확인', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={[ROUTEURL.NOTIFICATION]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('알림 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('구독'));
    expect(screen.getByText('구독 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('녹화목록'));
    expect(screen.getByText('녹화목록 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('마이 페이지'));
    expect(screen.getByText('마이 페이지 입니다')).toBeInTheDocument();
  });

  it('마이 페이지가 정상적으로 출력되는지 확인', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={[ROUTEURL.PROFILE]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getAllByText('마이 페이지 입니다')[0]).toBeInTheDocument();

    await user.click(screen.getByText('구독'));
    expect(screen.getByText('구독 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('녹화목록'));
    expect(screen.getByText('녹화목록 페이지 입니다')).toBeInTheDocument();

    await user.click(screen.getByText('알림'));
    expect(screen.getByText('알림 페이지 입니다')).toBeInTheDocument();
  });
});
