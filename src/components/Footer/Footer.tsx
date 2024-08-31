import React from "react";
import PageBody from "@components/Pages/PageBody";
import "@styles/Footer/Footer.css";

const Footer: React.FC = () => {
  const logoIC = "/assets/images/corsa-logo.png";
  const commonBg = "/assets/images/common-bg.png";
  const socialsIC = "/assets/icons/socials-ic.png";

  return (
    <div id="footer">
      <PageBody pageBgImg={commonBg}>
        <div className="footer-section">
          <div>
            <img src={logoIC} alt="Corsa Logo" />
            <div className="footer-placeholder"></div>
            <div className="footer-content-container">
              <div className="footer-content-left">
                <p>Contact us:</p>
                <p>Feel free to reach out! Our team is here to assist you.</p>

                <div className="footer-placeholder"></div>

                <p>Email:</p>
                <p>support@corsafuture.com</p>

                <div className="footer-placeholder"></div>

                <p>Address:</p>
                <p>Suite 5, Horsford’s Business Centre, Long Point Road,</p>
                <p>Charlestown, Nevis (KN-N), SAINT KITTS AND NEVIS</p>

                <div className="footer-placeholder"></div>

                <p>Stay updated and engaged.</p>
                <p>Follow us on social media for the</p>
                <p>latest market insights and company news</p>
                <img src={socialsIC} alt="Social Media Icons" />
              </div>

              <div className="footer-content-right">
                <p className="footer-custom-text">Quick Link:</p>
                <p>About Us</p>
                <p>Account Types</p>
                <p>Research & Education</p>
                <p>Privacy Policy</p>

                <div className="footer-placeholder"></div>
                <div className="footer-placeholder"></div>

                <p>Subscribe to Our Newsletter :</p>
                <p>Don’t miss out on market updates and exclusive offers.</p>
                <p>Subscribe to our newsletter for timely information.</p>

                <div className="footer-placeholder"></div>

                <input type="text" className="text-field" placeholder="Name" />
                <input
                  type="text"
                  className="text-field"
                  placeholder="Enter your email"
                />

                <div className="submit-button-container">
                  <button className="submit-button">Submit</button>
                </div>
              </div>
            </div>

            <div className="footer-placeholder"></div>

            <div>
              <p>Risk Warning : </p>
              <p>
                Trading involves risk. Please be aware of the risks involved and
                seek independent advice if necessary.
              </p>

              <div className="footer-placeholder"></div>

              <p>Terms of Service: </p>
              <p>
                Review our terms of service to understand the guidelines and
                conditions for using our platform.
              </p>
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  );
};

export default Footer;
