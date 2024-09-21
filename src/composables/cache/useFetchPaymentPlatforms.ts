import { useState, useEffect, useMemo } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IPaymentPlatform } from "@interface/cache/IPaymentPlatform";
import { useFetch } from "@composables/useFetch";

export const useFetchPaymentPlatforms = (
  paymentAction?: number,
  companyId?: number
) => {
  const queryParams = useMemo(() => {
    const params: Record<string, any> = {};
    if (paymentAction) params.paymentAction = paymentAction;
    if (companyId) params.companyId = companyId;
    return params;
  }, [paymentAction, companyId]);

  // Call useFetch at the top level
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<IPaymentPlatform[]>(
    ApiEndpoints.GetPaymentPlatforms,
    Object.keys(queryParams).length ? queryParams : undefined
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
