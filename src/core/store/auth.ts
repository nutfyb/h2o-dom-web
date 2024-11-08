import { defineStore } from 'pinia';

interface AuthState {
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isLoggedIn: (state): boolean => !!state.token, // Convert token to boolean
  },
  actions: {
    setToken(token: string): void {
      this.token = token;
      localStorage.setItem('token', token);
    },
    logout(): void {
      this.token = null;
      localStorage.removeItem('token');
    },
  },
});
