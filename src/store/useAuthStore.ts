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
      isAuthenticated: false,

      login: () => {
        set(() => ({
          isAuthenticated: true,
        }));
      },

      logout: () => {
        set(() => {
          useUserDataStore.getState().setUserData(null);
          useUserInfoStore.getState().setUserInfo(null);

          window.location.reload();

          return { isAuthenticated: false };
        });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
