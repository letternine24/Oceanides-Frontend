import { useState, useEffect, useMemo, useRef } from "react";
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

  const hasFetched = useRef(false);

  const stableQueryParams = useMemo(
    () => queryParams,
    [JSON.stringify(queryParams)]
  );

  useEffect(() => {
    const fetchData = async () => {
      if (hasFetched.current) return;
      try {
        const queryString = stableQueryParams
          ? `?${new URLSearchParams(stableQueryParams).toString()}`
          : "";
        const response = await fetch(`${BASEURL}${endpoint}${queryString}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setState({ data: result, loading: false, error: null });
        hasFetched.current = true;
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: (error as Error).message,
        });
        hasFetched.current = false; // Reset the flag on error
      }
    };

    if (!hasFetched.current) {
      fetchData();
    }
  }, [endpoint, stableQueryParams]);

  return state;
};
