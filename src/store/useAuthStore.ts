import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useUserDataStore } from "@/store/user/useUserDataStore";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false, // Initial value of isAuthenticated

      login: () => {
        set(() => ({
          isAuthenticated: true,
        }));
      },

      logout: () => {
        set(() => {
          // Clear user data and user info from the corresponding stores
          useUserDataStore.getState().setUserData(null);
          useUserInfoStore.getState().setUserInfo(null);

          // Reload the page if necessary
          window.location.reload();

          return { isAuthenticated: false };
        });
      },
    }),
    {
      name: "auth-storage", // Key for local storage
    }
  )
);
