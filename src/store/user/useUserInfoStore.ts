import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUserInfo {
  fullName: string;
  username: string;
  email: string;
  emailVerifiedAt: string;
  contactNumber: string;
  countryCode: string;
  currencyCode: string;
  dateOfBirth: string;
  withdrawalBank: string;
  withdrawalBankAccountName: string;
  withdrawalBankAccountNumber: string;
  eWalletBalance: number;
  verified: boolean;
  active: boolean;
  cTraderLogin: number;
  kycStatus: number | null;
  cTraderBalance: number;
  cTraderBonus: number;
  cTraderCashEquity: number;
  cTraderAccessRights: string;
  cTraderGroupName: string;
  cTraderWithdrawableBalance: number;
}

interface UserInfoStore {
  userInfo: IUserInfo | null;
  loading: boolean;
  error: string | null;
  setUserInfo: (info: IUserInfo | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUserInfoStore = create<UserInfoStore>()(
  persist(
    (set) => ({
      userInfo: null,
      loading: false,
      error: null,
      setUserInfo: (info: IUserInfo | null) =>
        set(() => ({
          userInfo: info,
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
      name: "user-info-store",
      partialize: (state) => ({ userInfo: state.userInfo }),
    }
  )
);
