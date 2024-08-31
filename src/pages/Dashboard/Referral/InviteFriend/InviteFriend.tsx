import React from "react";
import "./InviteFriend.css";

const InviteFriend: React.FC = () => {
  return (
    <>
      <div className="invite-friend-total-earnings">
        <div>
          <h3>Total Earned</h3>
          <h3>$ 0.00</h3>
        </div>

        <div className="invite-friend-total-earnings-actions">
          <button className="button button-small button-primary">
            Deposit
          </button>
          <button className="button button-small button-success">
            Withdraw
          </button>
        </div>
      </div>

      <div className="invite-friend card">
        <div className="card-body">
          <h4>Share Link with Friends and Earn Up to $ 0 Per Friend</h4>
          <p>Use the below link to invite your friends.</p>

          <div className="input-group invite-friend-form-field">
            <input
              type="text"
              placeholder="https://trade.info@example.com"
              readOnly
            />
            <button>
              <img src="/assets/icons/copy-ic.png" alt="Copy" />
            </button>
          </div>

          <br />

          <h3>
            How it works &nbsp;{" "}
            <span>The more friends you invite, the more you earn.</span>
          </h3>
          <hr />

          <div className="invite-friend-earnings">
            <div className="card-body">
              <h2 className="card-title">
                $ 50
                <span>/ referral</span>
              </h2>
              <p className="card-text">Refer up to 1-10 friends</p>
            </div>

            <div className="card-body">
              <h2 className="card-title">
                $ 50
                <span>/ referral</span>
              </h2>
              <p className="card-text">Refer up to 1-10 friends</p>
            </div>

            <div className="card-body">
              <h2 className="card-title">
                $ 50
                <span>/ referral</span>
              </h2>
              <p className="card-text">Refer up to 1-10 friends</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteFriend;
