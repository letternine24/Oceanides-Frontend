import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { ICreateClient } from "@interface/user/ICreateClient";
import { IResponse } from "@interface/IResponse";

export const useCreateClient = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.CreateClient);

  const createClient = (request: ICreateClient) => {
    postData({ body: request });
  };

  return { ...state, createClient };
};
