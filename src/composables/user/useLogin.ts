import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ILogin } from "@interface/user/ILogin";
import { IResponse } from "@interface/IResponse";

export const useLogin = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.Login);

  const login = async (request: ILogin): Promise<IResponse | null> => {
    try {
      // Capture the side effect from postData, which likely performs an API call but returns void.
      await postData({ body: request });

      // After the postData, we expect to see the state populated with the response.
      const response = state.data as IResponse;

      console.log(response)

      if (response && response.responseCode === 1 && response.data) {
        // Assuming response.data contains the user info or token you want to cache
        localStorage.setItem("user_data", JSON.stringify(response.data));
      }

      return response || null;
    } catch (error) {
      console.error("Error during login:", error);
      return null;
    }
  };

  return { ...state, login };
};
