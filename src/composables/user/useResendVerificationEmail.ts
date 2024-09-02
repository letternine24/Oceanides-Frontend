import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResendVerificationEmail } from "@interface/user/IResendVerificationEmail";
import { IResponse } from "@interface/IResponse";

export const useResendVerificationEmail = () => {
  const [postData, state] = usePost<IResponse>(
    ApiEndpoints.ResendVerificationEmail
  );

  const resendVerificationEmail = (request: IResendVerificationEmail) => {
    postData({ body: request });
  };

  return { ...state, resendVerificationEmail };
};
