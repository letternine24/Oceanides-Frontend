import { useState } from "react";
import { ApiEndpoints } from "@enum/apiEndpoints";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

interface PostState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface PostRequestOptions {
  headers?: HeadersInit;
  body: Record<string, any>;
}

export const usePost = <T>(
  endpoint: ApiEndpoints
): [(options: PostRequestOptions) => void, PostState<T>] => {
  const [state, setState] = useState<PostState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const postData = async (options: PostRequestOptions) => {
    setState({ data: null, loading: true, error: null });

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
        body: JSON.stringify(options.body),
      });

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

  return [postData, state];
};
