import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ICompany } from "@interface/cache/ICompany";
import { useFetch } from "@composables/useFetch";

export const useFetchCompanies = () => {
  const [companies, setCompanies] = useState<ICompany[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, loading, error } = useFetch<ICompany[]>(
        ApiEndpoints.GetCompanies
      );
      setCompanies(data);
      setLoading(loading);
      setError(error);
    };

    fetchData();
  }, []);

  return { companies, loading, error };
};
