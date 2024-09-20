import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IPaymentPlatform } from "@interface/cache/IPaymentPlatform";
import { useFetch } from "@composables/useFetch";

export const useFetchPaymentPlatforms = (
  paymentAction: number,
  companyId: number
) => {
  // Call useFetch at the top level
  const queryParams = { paymentAction, companyId };
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<IPaymentPlatform[]>(
    ApiEndpoints.GetPaymentPlatforms,
    queryParams
  );

  const [paymentPlatforms, setPaymentPlatforms] = useState<
    IPaymentPlatform[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setPaymentPlatforms(data);
    }
    setLoading(fetchLoading);
    setError(fetchError);
  }, [data, fetchLoading, fetchError]);

  return { paymentPlatforms, loading, error };
};
