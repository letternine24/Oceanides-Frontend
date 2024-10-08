import { IRequestOtpWithdrawalRequest } from "@/interface/withdrawal/IRequestOtpWithdrawal";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useRequestOtpWithdrawal = () => {
  const [postData, state] = usePost<IResponse>(
    ApiEndpoints.RequestOtpWithdrawal
  );

  const requestOtpWithdrawal = (request: IRequestOtpWithdrawalRequest) => {
    postData({ body: request });
  };

  return { ...state, requestOtpWithdrawal };
};
