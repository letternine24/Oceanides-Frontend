import { useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ICurrency } from "@interface/cache/ICurrency";
import { useFetch } from "@composables/useFetch";
import { useCurrencyStore } from "@store/useCurrencyStore"; // Import Zustand store

export const useFetchCurrencies = () => {
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<ICurrency[]>(ApiEndpoints.GetCurrencies);

  const setCurrencies = useCurrencyStore((state) => state.setCurrencies);
  const setLoading = useCurrencyStore((state) => state.setLoading);
  const setError = useCurrencyStore((state) => state.setError);

  const currencies = useCurrencyStore((state) => state.currencies);
  const loading = useCurrencyStore((state) => state.loading);
  const error = useCurrencyStore((state) => state.error);

  useEffect(() => {
    if (data) {
      setCurrencies(data);
    }
    setLoading(fetchLoading);
    setError(fetchError);
  }, [data, fetchLoading, fetchError, setCurrencies, setLoading, setError]);

  return { currencies, loading, error };
};
