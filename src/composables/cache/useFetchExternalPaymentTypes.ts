import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IExternalPaymentType } from "@interface/cache/IExternalPaymentType";
import { useFetch } from "@composables/useFetch";

export const useFetchExternalPaymentTypes = () => {
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<IExternalPaymentType[]>(ApiEndpoints.GetExternalPaymentTypes);

  const [externalPaymentTypes, setExternalPaymentTypes] = useState<
    IExternalPaymentType[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setExternalPaymentTypes(data);
    }
    setLoading(fetchLoading);
    setError(fetchError);
  }, [data, fetchLoading, fetchError]);

  return { externalPaymentTypes, loading, error };
};
