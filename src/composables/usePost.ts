import { useEffect, useState } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

interface PostState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface PostRequestOptions {
  headers?: HeadersInit;
  body: Record<string, any> | FormData;
  queryParams?: Record<string, any>;
}

export const usePost = <T>(
  endpoint: ApiEndpoints
): [(options: PostRequestOptions) => Promise<T | null>, PostState<T>] => {
  const [state, setState] = useState<PostState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {}, [state]);

  const postData = async (options: PostRequestOptions): Promise<T | null> => {
    setState({ data: null, loading: true, error: null });

    try {
      const queryString = options.queryParams
        ? `?${new URLSearchParams(options.queryParams).toString()}`
        : "";

      // Determine if the body is FormData
      let body: BodyInit | null = null;
      let headers: HeadersInit = options.headers || {};

      if (options.body instanceof FormData) {
        body = options.body;
      } else {
        body = JSON.stringify(options.body);
        headers = {
          ...headers,
          "Content-Type": "application/json",
        };
      }

      const response = await fetch(`${BASE_URL}${endpoint}${queryString}`, {
        method: "POST",
        headers,
        body,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      setState({ data: result, loading: false, error: null });
      return result.data;
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: (error as Error).message,
      });
      return null;
    }
  };

  return [postData, state];
};
