import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";

const BASEURL = import.meta.env.VITE_APP_BASE_URL;

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetch = <T>(
  endpoint: ApiEndpoints,
  queryParams?: Record<string, any>
): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = queryParams
          ? `?${new URLSearchParams(queryParams).toString()}`
          : "";
        const response = await fetch(`${BASEURL}${endpoint}${queryString}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setState({ data: result, loading: false, error: null });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: (error as Error).message,
        });
      }
    };

    fetchData();
  }, [endpoint, queryParams]);

  return state;
};
