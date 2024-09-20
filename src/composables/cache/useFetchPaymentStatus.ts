import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IPaymentStatus } from "@interface/cache/IPaymentStatus";
import { useFetch } from "@composables/useFetch";

export const useFetchPaymentStatus = () => {
  // Call useFetch at the top level
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<IPaymentStatus[]>(ApiEndpoints.GetPaymentStatuses);

  const [paymentStatus, setPaymentStatus] = useState<IPaymentStatus[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setPaymentStatus(data);
    }
    setLoading(fetchLoading);
    setError(fetchError);
  }, [data, fetchLoading, fetchError]);

  return { paymentStatuses: paymentStatus, loading, error };
};
