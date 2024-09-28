import History from "./History/History";
import InviteFriend from "./InviteFriend/InviteFriend";
import Tabs from "@components/Tabs/Tabs";
import Disclaimer from "../shared/Disclaimer/Disclaimer";
import { useEffect } from "react";
import { useGetReferralHierarchy } from "@/composables/user/useGetReferralHierarchy";
import { useUserDataStore } from "@/store/user/useUserDataStore";

const Referrals = () => {
  const tabData = [
    {
      id: "invite-friend",
      label: "Invite a Friend",
      content: <InviteFriend />,
    },
    {
      id: "history",
      label: "History",
      content: <History />,
    },
  ];

  const { userData } = useUserDataStore();
  const { getReferralHierarchy } = useGetReferralHierarchy();

  useEffect(() => {
    const getRefferals = async () => {
      await getReferralHierarchy({ userId: userData?.staffUserId });
    };

    getRefferals();
  }, []);
  return (
    <>
      <h1>Refer a Friend</h1>
      <hr />
      <Tabs tabs={tabData} />
      <Disclaimer />
    </>
  );
};

export default Referrals;
