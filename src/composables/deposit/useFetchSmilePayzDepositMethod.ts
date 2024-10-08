import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ISmilePayzPaymentMethod } from "@interface/cache/ISmilePayzPaymentMethod";
import { useFetch } from "@composables/useFetch";

export const useFetchSmilePayzDepositMethod = () => {
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<ISmilePayzPaymentMethod[]>(ApiEndpoints.GetSmilePayzDepositMethod);

  const [payzPaymentMethod, setPayzPaymentMethod] = useState<ISmilePayzPaymentMethod[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setPayzPaymentMethod(data);
    }
    setLoading(fetchLoading);
    setError(fetchError);
  }, [data, fetchLoading, fetchError]);

  return { payzPaymentMethod, loading, error };
};
