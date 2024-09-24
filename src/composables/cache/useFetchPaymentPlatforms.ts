import { useEffect, useMemo } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IPaymentPlatform } from "@interface/cache/IPaymentPlatform";
import { useFetch } from "@composables/useFetch";
import { usePaymentPlatformStore } from "@store/usePaymentPlatformStore";

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

  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<IPaymentPlatform[]>(
    ApiEndpoints.GetPaymentPlatforms,
    Object.keys(queryParams).length ? queryParams : undefined
  );

  const setPaymentPlatforms = usePaymentPlatformStore(
    (state) => state.setPaymentPlatforms
  );
  const setLoading = usePaymentPlatformStore((state) => state.setLoading);
  const setError = usePaymentPlatformStore((state) => state.setError);

  useEffect(() => {
    if (data) {
      setPaymentPlatforms(data);
    }
    setLoading(fetchLoading);
    setError(fetchError);
  }, [
    data,
    fetchLoading,
    fetchError,
    setPaymentPlatforms,
    setLoading,
    setError,
  ]);

  // Returning the values from the Zustand store
  const paymentPlatforms = usePaymentPlatformStore(
    (state) => state.paymentPlatforms
  );
  const loading = usePaymentPlatformStore((state) => state.loading);
  const error = usePaymentPlatformStore((state) => state.error);

  return { paymentPlatforms, loading, error };
};
