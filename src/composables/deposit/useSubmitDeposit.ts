import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useSubmitDeposit = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.SubmitDeposit);

  const submitDeposit = (request: FormData) => {
    console.log(request);
    postData({ body: request });
  };

  return { ...state, submitDeposit };
};
