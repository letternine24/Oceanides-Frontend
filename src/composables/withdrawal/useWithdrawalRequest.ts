import { IWithdrawalRequest } from "@/interface/withdrawal/IWithdrawalRequest";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useWithdrawalRequest = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.UpdateUserInfo);

  const withdrawalRequest = (request: IWithdrawalRequest) => {
    postData({ body: request });
  };

  return { ...state, withdrawalRequest };
};
