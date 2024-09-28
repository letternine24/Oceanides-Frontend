import { IUpdateUserInfoRequest } from "@/interface/user/IUpdateUserInfo";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useUpdateUserInfo = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.UpdateUserInfo);

  const updateUserInfo = (request: IUpdateUserInfoRequest) => {
    postData({ body: request });
  };

  return { ...state, updateUserInfo };
};
