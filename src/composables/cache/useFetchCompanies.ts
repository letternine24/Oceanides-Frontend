import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ICompany } from "@interface/cache/ICompany";
import { useFetch } from "@composables/useFetch";

export const useFetchCompanies = () => {
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch<ICompany[]>(ApiEndpoints.GetCompanies);

  const [companies, setCompanies] = useState<ICompany[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (data) {
      setCompanies(data);
    }
    setLoading(fetchLoading);
    setError(fetchError);
  }, [data, fetchLoading, fetchError]);

  return { companies, loading, error };
};
