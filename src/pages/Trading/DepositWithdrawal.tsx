import PageHeading from "@components/Pages/PageHeading";
import PageBody from "@components/Pages/PageBody";
import "@styles/Trading/DepositWithdrawal.css";
import Accordion from "@components/Accordion/Accordion";
import { DepositWithdrawalAccordion } from "../../utils/constants/DepositWithdrawal";

const DepositWithdrawal = () => {
  const imgBg = "/assets/images/common-bg.png";
  const imgPayment = "/assets/images/depositwidthdraw-payment-method.png";
  const headerMessage =
    "<h1>Instant Deposits. Fast Withdrawls. No Commission.</h1>";

  return (
    <>
      <main>
        <PageHeading
          pageTitle="Deposit & Withdrawal"
          pageHeader={headerMessage}
          pageBgImg={imgBg}
        >
          <div className="page-header-deposit-withdrawal">
            <h3>
              Easily and securely fund your account using our extensive range of
              payment options. Rest assured; your funds are held in utmost
              security within Tier 1 banks.
            </h3>
          </div>
        </PageHeading>

        <PageBody>
          <div className="page-body-deposit">
            <h1>DEPOSIT & WITHDRAWAL METHODS</h1>

            <img src={imgPayment} />
          </div>

          <div className="page-body-accordion">
            <h1>Frequently Asked Questions</h1>
            <Accordion accordions={DepositWithdrawalAccordion} />
          </div>
        </PageBody>
      </main>
    </>
  );
};

export default DepositWithdrawal;
