import { IUpdateUserPasswordRequest } from "@/interface/user/IUpdateUserPassword";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useUpdateUserPassword = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.UpdateUserPassword);

  const userUserPassword = (request: IUpdateUserPasswordRequest) => {
    postData({ body: request });
  };

  return { ...state, userUserPassword };
};
