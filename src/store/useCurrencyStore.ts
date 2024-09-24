import { create } from "zustand";
import { ICurrency } from "@interface/cache/ICurrency";

interface CurrencyStore {
  currencies: ICurrency[] | null;
  loading: boolean;
  error: string | null;
  setCurrencies: (currencies: ICurrency[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCurrencyStore = create<CurrencyStore>((set) => ({
  currencies: null,
  loading: true,
  error: null,
  setCurrencies: (currencies: ICurrency[]) => set({ currencies }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
}));
