import { IApproveWithdrawalRequest } from "@/interface/withdrawal/IApproveWithdrawal";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useApproveWithdrawalRequest = () => {
  const [postData, state] = usePost<IResponse>(
    ApiEndpoints.ApproveWithdrawalRequest
  );

  const setApproveWithdrawal = (request: IApproveWithdrawalRequest) => {
    postData({ body: request });
  };

  return { ...state, setApproveWithdrawal };
};
