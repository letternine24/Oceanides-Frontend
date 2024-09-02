import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IGenerateDepositUrlEssRequest } from "@interface/deposit/IGenerateDepositUrlEss";
import { IResponse } from "@interface/IResponse";

export const useGenerateDepositUrlEss = () => {
  const [postData, state] = usePost<IResponse>(
    ApiEndpoints.GenerateDepositUrlEss
  );

  const generateDepositUrl = (request: IGenerateDepositUrlEssRequest) => {
    postData({ body: request });
  };

  return { ...state, generateDepositUrl };
};
