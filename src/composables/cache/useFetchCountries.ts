import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ICountry } from "@interface/cache/ICountry";
import { useFetch } from "@composables/useFetch";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState<ICountry[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, loading, error } = useFetch<ICountry[]>(
        ApiEndpoints.GetCountries
      );
      setCountries(data);
      setLoading(loading);
      setError(error);
    };

    fetchData();
  }, []);

  return { countries, loading, error };
};
