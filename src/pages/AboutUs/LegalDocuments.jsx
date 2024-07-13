import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import PageBody from "@components/Pages/PageBody";
import "@styles/AboutUs/LegalDocuments.css";

const LegalDocuments = () => {
  return (
    <main>
      <PageHeading pageTitle="About Us" pageHeader="LEGAL DOCUMENTS" />

      <PageBody>
        <div className="mt-5">
          <p>
            <strong>
              Access important legal documentation related to your trading
              account,
            </strong>
            <br />
            <strong>
              including terms and conditions, risk disclosures, and more.
            </strong>
          </p>
        </div>

        <div className="legal-documents-links">
          {/*  */}
          <div className="legal-documents-links-container">
            <ul className="">
              <li>
                <span
                  className="iconlist-char"
                  aria-hidden="true"
                  data-av_icon=""
                  data-av_iconfont="entypo-fontello"
                ></span>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Anti-Money-Laundering-Policy.pdf"
                  title="Anti-Money Laundering Policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anti-Money Laundering Policy
                </a>
              </li>
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Anti-Spam-Policy.pdf"
                  title="Anti-Spam Policy "
                >
                  Anti-Spam Policy
                </a>
              </li>
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Customer-Agreement.pdf"
                  title="Customer Agreement"
                >
                  Customer Agreement
                </a>
              </li>
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Copy-Trading-Policy.pdf"
                  title="Copy Trading Policy"
                >
                  Copy Trading Policy
                </a>
              </li>
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Order-Execution-Policy.pdf"
                  title="Order Execution Policy"
                >
                  Order Execution Policy
                </a>
              </li>
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Privacy-Policy.pdf"
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd */}
          <div className="legal-documents-links-container">
            <ul className="">
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Refund-and-Cancellation-Policy.pdf"
                  title="Return &amp; Refund Policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Return &amp; Refund Policy
                </a>
              </li>
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Risk-Disclosure-Statement.pdf"
                  title="Risk Disclosure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Risk Disclosure
                </a>
              </li>
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Terms-and-Conditions.pdf"
                  title="Terms and Conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>

                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Terms-of-Business.pdf"
                  title="Terms of Business"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Business
                </a>
              </li>
              <li>
                <div className="">
                  <span
                    className="iconlist-char"
                    aria-hidden="true"
                    data-av_icon=""
                    data-av_iconfont="entypo-fontello"
                  ></span>
                </div>
                <a
                  href="https://front.corsafutures.com/wp-content/uploads/2024/01/Terms-of-Use.pdf"
                  title="Terms of Use"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </PageBody>
    </main>
  );
};

export default LegalDocuments;
