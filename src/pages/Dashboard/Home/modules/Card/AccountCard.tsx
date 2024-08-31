import React from "react";
import "./AccountCard.css";

interface AccountCardProps {
  title: string;
  amount: number;
  icon?: string;
  onTransferClick?: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({
  title,
  amount,
  icon,
//   onTransferClick,
}) => {
  return (
    <div className="account-card">
      <div className="account-card-header">
        {icon && <span className={icon} />}
        <h4>{title}</h4>
      </div>
      <div className="account-card-body">
        <p>${amount.toFixed(2)}</p>
        {/* Uncomment the button below if transfer functionality is needed */}
        {/* <button onClick={onTransferClick}>Transfer</button> */}
      </div>
    </div>
  );
};

export default AccountCard;
