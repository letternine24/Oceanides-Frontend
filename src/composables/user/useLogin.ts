import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ILogin } from "@interface/user/ILogin";
import { IResponse } from "@interface/IResponse";
import { useUserDataStore } from "@/store/user/useUserDataStore";

export const useLogin = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.Login);
  const { setUserData } = useUserDataStore();
  const login = async (request: ILogin): Promise<void> => {
    try {
      const response = await postData({ body: request });

      setUserData(response as any);

      return response as any;
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return { ...state, login };
};
