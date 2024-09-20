import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ICountry } from "@interface/cache/ICountry";
import { useFetch } from "@composables/useFetch";

export const useFetchCountries = () => {
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<ICountry[]>(ApiEndpoints.GetCountries);

  const [countries, setCountries] = useState<ICountry[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
    setLoading(fetchLoading);
    setError(fetchError);
  }, [data, fetchLoading, fetchError]);

  return { countries, loading, error };
};
