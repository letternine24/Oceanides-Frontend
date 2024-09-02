import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IPaymentStatus } from "@interface/cache/IPaymentStatus";
import { useFetch } from "@composables/useFetch";

export const useFetchPaymentStatus = () => {
  const [paymentStatus, setPaymentStatus] = useState<
    IPaymentStatus[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, loading, error } = useFetch<IPaymentStatus[]>(
        ApiEndpoints.GetPaymentStatuses
      );
      setPaymentStatus(data);
      setLoading(loading);
      setError(error);
    };

    fetchData();
  }, []);

  return { paymentStatuses: paymentStatus, loading, error };
};
