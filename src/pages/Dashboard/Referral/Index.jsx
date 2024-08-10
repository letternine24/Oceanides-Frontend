import React from "react";
import History from "./History/History";
import InviteFriend from "./InviteFriend/InviteFriend";
import Tabs from "@components/Tabs/Tabs";
import Disclaimer from "../shared/Disclaimer/Disclaimer";

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
