import { useState, useEffect } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";

const BASE_URL = "http://34.143.129.236";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetch = <T>(endpoint: ApiEndpoints): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
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
  }, [endpoint]);

  return state;
};
