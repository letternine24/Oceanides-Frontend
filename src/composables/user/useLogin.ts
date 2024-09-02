import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ILogin } from "@interface/user/ILogin";
import { IResponse } from "@interface/IResponse";

export const useLogin = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.Login);

  const login = (request: ILogin) => {
    postData({ body: request });
  };

  return { ...state, login };
};
