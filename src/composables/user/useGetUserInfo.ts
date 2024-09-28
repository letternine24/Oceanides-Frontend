import { IGetUserInfoRequest } from "@/interface/user/IGetUserInfo";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";

export const useGetUserInfo = () => {
  const [postData, state] = usePost<IResponse>(ApiEndpoints.GetUserInfo);
  const { setUserInfo } = useUserInfoStore();
  
  const getUserInfo = async (request: IGetUserInfoRequest): Promise<void> => {
    try {
      const response = await postData({ body: request });

      if (response) {
        setUserInfo(response as any);
      }

      return response as any;
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return { ...state, getUserInfo };
};
