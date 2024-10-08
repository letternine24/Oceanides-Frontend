import { IGetWithdrawalMethodRequest } from "@/interface/withdrawal/IGetWithdrawalMethod";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useGetWithdrawalMethod = () => {
  const [postData, state] = usePost<IResponse>(
    ApiEndpoints.GetWithdrawalMethod
  );

  const getWithdrawalMethod = (request: IGetWithdrawalMethodRequest) => {
    postData({ body: request, queryParams: request });
  };

  return { ...state, getWithdrawalMethod };
};
