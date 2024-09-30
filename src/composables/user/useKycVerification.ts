import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useKycVerification = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.KycVerification);

  const kycVerification = (formData: FormData) => {
    postData({ body: formData });
  };

  return { ...state, kycVerification };
};
