import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IExternalPaymentType } from "@interface/cache/IExternalPaymentType";
import { useFetch } from "@composables/useFetch";

export const useFetchExternalPaymentTypes = () => {
  const [externalPaymentTypes, setExternalPaymentTypes] = useState<
    IExternalPaymentType[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, loading, error } = useFetch<IExternalPaymentType[]>(
        ApiEndpoints.GetExternalPaymentTypes
      );
      setExternalPaymentTypes(data);
      setLoading(loading);
      setError(error);
    };

    fetchData();
  }, []);

  return { externalPaymentTypes, loading, error };
};
