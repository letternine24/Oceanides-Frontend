import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUserReferral {
  name: string;
  level: number;
  parent: string;
  active: boolean;
  dateRegistered: string;
}

interface UserReferralStore {
  referralData: IUserReferral[] | null; // Change to array
  loading: boolean;
  error: string | null;
  setReferralData: (data: IUserReferral[] | null) => void; // Change to array
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUserReferralStore = create<UserReferralStore>()(
  persist(
    (set) => ({
      referralData: null,
      loading: false,
      error: null,
      setReferralData: (data: IUserReferral[] | null) =>
        set(() => ({
          referralData: data,
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
      name: "user-referral-storage",
      partialize: (state) => ({ referralData: state.referralData }),
    }
  )
);
