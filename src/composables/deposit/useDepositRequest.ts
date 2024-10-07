import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IDepositRequest } from "@interface/deposit/IDepositRequest";
import { IResponse } from "@interface/IResponse";

export const useDepositRequest = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.DepositRequest);

  const makeDepositRequest = async (request: FormData): Promise<string | undefined | null> => {
    try {
      const response = await postData({ body: request });
      
      if (response){
        return response as any;
      }
      else return "";
    } catch (error) {
      console.error("Error making deposit request:", error);
      return undefined; // Return undefined in case of error to indicate failure
    }
  };

  return { ...state, makeDepositRequest };
};