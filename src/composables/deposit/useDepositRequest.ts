import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IDepositRequest } from "@interface/deposit/IDepositRequest";
import { IResponse } from "@interface/IResponse";

export const useDepositRequest = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.DepositRequest);

  const makeDepositRequest = (request: IDepositRequest) => {
    postData({ body: request });
  };

  return { ...state, makeDepositRequest };
};
