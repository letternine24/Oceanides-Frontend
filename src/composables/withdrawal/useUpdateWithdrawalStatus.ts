
import { IUpdateWithdrawalStatusRequest } from "@/interface/withdrawal/IUpdateWithdrawalStatus";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useUpdateWithdrawalStatus = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.UpdateUserInfo);

  const updateWithdrawalStatus = (request: IUpdateWithdrawalStatusRequest ) => {
    postData({ body: request });
  };

  return { ...state, updateWithdrawalStatus };
};
