import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUserData {
  staffUserId: number;
  email: string;
  username: string;
  emailVerifiedAt: string;
  cTraderLogin: number;
  currencyCode: string;
  kycStatus: string | null;
}

interface UserDataStore {
  userData: IUserData | null;
  loading: boolean;
  error: string | null;
  setUserData: (user: IUserData | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUserDataStore = create<UserDataStore>()(
  persist(
    (set) => ({
      userData: null,
      loading: false,
      error: null,
      setUserData: (user: IUserData | null) =>
        set(() => ({
          userData: user,
          loading: false,
          error: null,
        })),
      setLoading: (loading: boolean) => set(() => ({ loading })),
      setError: (error: string | null) =>
        set(() => ({
          error,
          loading: false,
        })),
    }),
    {
      name: "user-data-store",
      partialize: (state) => ({ userData: state.userData }),
    }
  )
);
