import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (value) => set({ isLoggedIn: value }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ isLoggedIn: state.isLoggedIn }),
    }
  )
);

export const authStore = useAuthStore.getState();
