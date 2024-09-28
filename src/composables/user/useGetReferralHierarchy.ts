import { IGetReferralHierarchyRequest } from "@/interface/user/IGetReferralHierarchy";
import { usePost } from "@composables/usePost";
import { ApiEndpoints } from "@enum/apiEndpoints";
import { IResponse } from "@interface/IResponse";
import { useUserReferralStore } from "@/store/user/useUserReferralStore";

export const useGetReferralHierarchy = () => {
  const [postData, state] = usePost<IResponse>(
    ApiEndpoints.GetReferralHierarchy
  );
  const { setReferralData } = useUserReferralStore();

  const getReferralHierarchy = async (
    request: IGetReferralHierarchyRequest
  ): Promise<void> => {
    try {
      const response = await postData({ body: request, queryParams: request });

      if (response) {
        setReferralData(response as any);
      }

      return response as any;
    } catch (error) {
      console.error("Error fetching referral hierarchy:", error);
    }
  };

  return { ...state, getReferralHierarchy };
};
