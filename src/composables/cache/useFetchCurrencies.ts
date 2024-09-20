import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ICurrency } from "@interface/cache/ICurrency";
import { useFetch } from "@composables/useFetch";

export const useFetchCurrencies = () => {
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<ICurrency[]>(ApiEndpoints.GetCurrencies);

  const [currencies, setCurrencies] = useState<ICurrency[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setCurrencies(data);
    }
    setLoading(fetchLoading);
    setError(fetchError);
  }, [data, fetchLoading, fetchError]);

  return { currencies, loading, error };
};
