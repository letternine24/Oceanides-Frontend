import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import PageBody from "@components/Pages/PageBody";
import "@styles/AboutUs/PrivacyPolicy.css";
import Accordion from "@components/Accordion/Accordion";
import { PrivacyPolicyAccordion } from "@utils/constants/PrivacyPolicy";

const PrivacyPolicy: React.FC = () => {
  return (
    <main>
      <PageHeading pageTitle="About Us" pageHeader="PRIVACY POLICY" />

      <PageBody>
        <div className="privacy-policy-content">
          <p>
            Corsa Futures provides this Privacy Policy to communicate its
            policies and procedures regarding the collection, use, and
            disclosure of personally identifiable information received from
            users of this website.
          </p>

          <p>
            We reserve the right to make changes to the Site or the Privacy
            Policy, and any modifications will be effective upon posting on the
            Site. Your continued use of the Site after the posting of any
            revised Privacy Policy indicates acceptance of the modified terms.
            By providing us with your information, you consent to the
            collection, use, and storage of the information as explained below.
          </p>

          <p>
            Corsa Futures places great importance on data protection and
            security. The privacy and confidentiality of individuals using our
            website are significant concerns for us. Therefore, we commit to
            safeguarding your privacy and treating your data confidentially.
            Personal data will only be disclosed to third parties when permitted
            by data protection laws, in response to a judicial or similar order
            for data release, or when you have explicitly consented to such data
            sharing.
          </p>
        </div>
        <Accordion accordions={PrivacyPolicyAccordion} />
      </PageBody>
    </main>
  );
};

export default PrivacyPolicy;
