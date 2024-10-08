import { IPaymentGatewayResponse } from "@/interface/deposit/IPaymentGatewayResponse";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IGenerateDepositUrlEssRequest } from "@interface/deposit/IGenerateDepositUrlEss";
import { IResponse } from "@interface/IResponse";

export const useGenerateDepositUrlEss = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.GenerateDepositUrlEss);

  const generateDepositUrl = async (
    request: IGenerateDepositUrlEssRequest): Promise<IPaymentGatewayResponse | undefined> => {
    try {
      const response = await postData({ body: request });
      if (response) {
        return response as any as IPaymentGatewayResponse;
      }
    } catch (error) {
      console.error("Error generating deposit URL:", error);
    }
    return undefined;
  };

  return { ...state, generateDepositUrl };
};