import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ICurrency } from "@interface/cache/ICurrency";
import { useFetch } from "@composables/useFetch";

export const useFetchCurrencies = () => {
  const [currencies, setCurrencies] = useState<ICurrency[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, loading, error } = useFetch<ICurrency[]>(
        ApiEndpoints.GetCurrencies
      );
      setCurrencies(data);
      setLoading(loading);
      setError(error);
    };

    fetchData();
  }, []);

  return { currencies, loading, error };
};
