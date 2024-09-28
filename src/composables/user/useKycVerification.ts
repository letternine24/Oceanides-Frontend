import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IKycVerificationRequest } from "@/interface/user/IKycVerification";
import { IResponse } from "@interface/IResponse";

export const useKycVerification = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.KycVerification);

  const kycVerification = (request: IKycVerificationRequest) => {
    postData({ body: request });
  };

  return { ...state, kycVerification };
};
