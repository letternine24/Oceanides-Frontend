import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IVerifyEmail } from "@interface/user/IVerifyEmail";
import { IResponse } from "@interface/IResponse";

export const useVerifyEmail = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.VerifyEmail);

  const verifyEmail = (request: IVerifyEmail) => {
    postData({ body: request });
  };

  return { ...state, verifyEmail };
};
