import React from "react";
import { useUserReferralStore } from "@/store/user/useUserReferralStore";
import "./History.css";

const History: React.FC = () => {
  const { referralData } = useUserReferralStore();

  return (
    <div className="history">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Level</th>
            <th scope="col">Parent</th>
            <th scope="col">Active</th>
            <th scope="col">Date Registered</th>
          </tr>
        </thead>
        <tbody>
          {referralData && referralData.length > 0 ? (
            referralData.map((referral, index) => (
              <tr key={index}>
                <td>{referral.name}</td>
                <td>{referral.level}</td>
                <td>{referral.parent}</td>
                <td>{referral.active ? "Yes" : "No"}</td>
                <td>
                  {new Date(referral.dateRegistered).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No Referral Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;
