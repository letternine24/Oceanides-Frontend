import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IPaymentPlatform } from "@interface/cache/IPaymentPlatform";
import { useFetch } from "@composables/useFetch";

export const useFetchPaymentPlatforms = (
  paymentAction: number,
  companyId: number
) => {
  const [paymentPlatforms, setPaymentPlatforms] = useState<
    IPaymentPlatform[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = { paymentAction, companyId };
      const { data, loading, error } = useFetch<IPaymentPlatform[]>(
        ApiEndpoints.GetPaymentPlatforms,
        queryParams
      );

      setPaymentPlatforms(data);
      setLoading(loading);
      setError(error);
    };

    fetchData();
  }, [paymentAction, companyId]);

  return { paymentPlatforms, loading, error };
};
