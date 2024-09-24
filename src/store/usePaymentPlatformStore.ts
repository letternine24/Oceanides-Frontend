import { create } from "zustand";
import { IPaymentPlatform } from "@interface/cache/IPaymentPlatform";

interface PaymentPlatformStore {
  paymentPlatforms: IPaymentPlatform[] | null;
  loading: boolean;
  error: string | null;
  setPaymentPlatforms: (platforms: []) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const usePaymentPlatformStore = create<PaymentPlatformStore>((set) => ({
  paymentPlatforms: null,
  loading: true,
  error: null,
  setPaymentPlatforms: (platforms: IPaymentPlatform[]) =>
    set({ paymentPlatforms: platforms }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
}));
