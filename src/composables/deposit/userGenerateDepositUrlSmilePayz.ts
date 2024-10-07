import { IGenerateDepositUrlSmilePayz } from "@/interface/deposit/IGenerateDepositUrlSmilePayz";
import { IPaymentGatewayResponse } from "@/interface/deposit/IPaymentGatewayResponse";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";

export const useGenerateDepositUrlSmilePayz = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.GenerateDepositUrlEss);

  const generateDepositUrlSmilePayz = async (
    request: IGenerateDepositUrlSmilePayz): Promise<IPaymentGatewayResponse | undefined> => {
    try {
      console.log(request);
      const response = await postData({ body: request });
      console.log(response);
      if (response) {
        return response as any as IPaymentGatewayResponse;
      }
    } catch (error) {
      console.error("Error generating deposit URL:", error);
    }
    return undefined;
  };

  return { ...state, generateDepositUrlSmilePayz };
};