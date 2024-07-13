import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import PageBody from "@components/Pages/PageBody";
import "@styles/AboutUs/PrivacyPolicy.css";

const PrivacyPolicy = () => {
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

        <div
          className="accordion privacy-policy-items"
          id="privacyPolicyAccordion"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button privacy-policy-items-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What Information We Collect
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <div>
                    <strong>Anonymous Browsing:</strong>
                  </div>
                  <div>
                    Users browsing non-password protected sections of the site
                    do so anonymously, and no personally identifiable
                    information is collected during this phase.
                  </div>

                  <div>
                    <strong>Registration Information:</strong>
                  </div>
                  <div>
                    To become a registered user, individuals are required to
                    provide an email address, username, and password. Optional
                    information, such as trading details and a profile
                    description, may also be submitted.
                  </div>

                  <div>
                    <strong>Personal Data Definition:</strong>
                  </div>
                  <div>
                    The document defines personal data as information that can
                    be unequivocally linked to a specific individual, disclosing
                    personal or factual details about that person.
                  </div>

                  <div>
                    <strong>Registration Requirement:</strong>
                  </div>
                  <div>
                    Utilization of the Corsa Futures platform is contingent on
                    prior registration.
                  </div>

                  <div>
                    <strong>Account Information Collection:</strong>
                  </div>
                  <div>
                    When applying for or maintaining a Corsa Futures Demo or
                    Live account, the company collects personal information for
                    various business purposes, such as evaluating financial
                    needs, processing requests and transactions, informing about
                    relevant products and services, and providing client
                    service.
                  </div>

                  <div>
                    <strong>Types of Information Collected Include:</strong>
                  </div>
                  <ul>
                    <li>
                      Application Information: Name, address, birth date, social
                      security number, occupation, assets, income.
                    </li>
                    <li>
                      Transaction Information: Account balances, trading
                      activity, inquiries, responses.
                    </li>
                    <li>
                      Verification Information: Identity verification documents
                      like passport or driver’s license, background information
                      from public records or non-affiliated entities.
                    </li>
                  </ul>

                  <div>
                    <strong>User Identification:</strong>
                  </div>
                  <div>
                    Once registered and signed in, users are no longer anonymous
                    to Corsa Futures. They may provide credentials to access
                    brokerage accounts.
                  </div>

                  <div>
                    <strong>Account Deactivation:</strong>
                  </div>
                  <div>
                    Users can deactivate their accounts at any time, resulting
                    in the deletion of personally identifiable information from
                    servers, unless legal requirements dictate otherwise.
                  </div>

                  <div>
                    <strong>
                      Collection of Non-Personally Identifiable Information:
                    </strong>
                  </div>
                  <div>
                    Non-personally identifiable information is also collected
                    when users engage in certain activities such as posting
                    comments, providing feedback, or answering surveys. This
                    type of information is considered non-confidential and may
                    be disclosed and used by Corsa Futures without requiring
                    user permission.
                  </div>

                  <div>
                    It’s important for users to be aware of the information
                    being collected, how it’s used, and the company’s commitment
                    to privacy and data protection.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How We Use the Information We Collect
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <div>
                    <strong>Anonymous Browsing:</strong>
                  </div>
                  <div>
                    Users browsing non-password protected sections of the site
                    do so anonymously, and no personally identifiable
                    information is collected during this phase.
                  </div>

                  <div>
                    <strong>Registration Information:</strong>
                  </div>
                  <div>
                    To become a registered user, individuals are required to
                    provide an email address, username, and password. Optional
                    information, such as trading details and a profile
                    description, may also be submitted.
                  </div>

                  <div>
                    <strong>Personal Data Definition:</strong>
                  </div>
                  <div>
                    The document defines personal data as information that can
                    be unequivocally linked to a specific individual, disclosing
                    personal or factual details about that person.
                  </div>

                  <div>
                    <strong>Registration Requirement:</strong>
                  </div>
                  <div>
                    Utilization of the Corsa Futures platform is contingent on
                    prior registration.
                  </div>

                  <div>
                    <strong>Account Information Collection:</strong>
                  </div>
                  <div>
                    When applying for or maintaining a Corsa Futures Demo or
                    Live account, the company collects personal information for
                    various business purposes, such as evaluating financial
                    needs, processing requests and transactions, informing about
                    relevant products and services, and providing client
                    service.
                  </div>

                  <div>
                    <strong>Types of Information Collected Include:</strong>
                  </div>
                  <ul>
                    <li>
                      Application Information: Name, address, birth date, social
                      security number, occupation, assets, income.
                    </li>
                    <li>
                      Transaction Information: Account balances, trading
                      activity, inquiries, responses.
                    </li>
                    <li>
                      Verification Information: Identity verification documents
                      like passport or driver’s license, background information
                      from public records or non-affiliated entities.
                    </li>
                  </ul>

                  <div>
                    <strong>User Identification:</strong>
                  </div>
                  <div>
                    Once registered and signed in, users are no longer anonymous
                    to Corsa Futures. They may provide credentials to access
                    brokerage accounts.
                  </div>

                  <div>
                    <strong>Account Deactivation:</strong>
                  </div>
                  <div>
                    Users can deactivate their accounts at any time, resulting
                    in the deletion of personally identifiable information from
                    servers, unless legal requirements dictate otherwise.
                  </div>

                  <div>
                    <strong>
                      Collection of Non-Personally Identifiable Information:
                    </strong>
                  </div>
                  <div>
                    Non-personally identifiable information is also collected
                    when users engage in certain activities such as posting
                    comments, providing feedback, or answering surveys. This
                    type of information is considered non-confidential and may
                    be disclosed and used by Corsa Futures without requiring
                    user permission.
                  </div>

                  <div>
                    It’s important for users to be aware of the information
                    being collected, how it’s used, and the company’s commitment
                    to privacy and data protection.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Technical Information & Data Security
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <div>
                    <strong>Cookie Usage:&nbsp;</strong>
                  </div>
                  <div>
                    Corsa Futures employs “cookies” or similar web tools to
                    enhance the user experience. Cookies are small text strings
                    sent by the site to the user’s browser and stored on the
                    computer’s hard drive.
                  </div>

                  <div>
                    <strong>Functionality of Cookies:</strong>
                  </div>
                  <ul>
                    <li>
                      Recognition: Cookies enable the site to recognize users
                      upon their return.
                    </li>
                    <li>
                      Web Session Maintenance: They help maintain the user’s web
                      session while browsing, contributing to a seamless
                      experience.
                    </li>
                    <li>
                      Personalization: Cookies assist in providing a better,
                      more personalized user experience.
                    </li>
                    <li>
                      Non-Tied to Personally Identifiable Information: The
                      cookies used by Corsa Futures are not linked to personally
                      identifiable information.
                    </li>
                  </ul>

                  <div>
                    <strong>Browser Acceptance of Cookies:</strong> Most web
                    browsers automatically accept cookies, but users have the
                    option to change browser settings to reject them. However,
                    rejecting cookies may limit access to certain portions of
                    the site.
                  </div>

                  <div>
                    <strong>Automatic Information Collection:&nbsp;</strong>
                  </div>
                  <div>
                    When users browse the site, Corsa Futures automatically
                    receives and records information on server logs. This
                    includes IP addresses, cookie information, and requested
                    pages.
                  </div>

                  <div>
                    <strong>Purpose of Information Collection:</strong>
                  </div>
                  <div>
                    The information collected is utilized to enhance the
                    functionality and usability of services. Server log files
                    are not connected to personally identifiable information.
                  </div>

                  <div>
                    <strong>Security Measures:</strong>
                  </div>
                  <div>
                    Corsa Futures employs secure server software (SSL) and
                    firewalls to protect information from unauthorized access,
                    disclosure, alteration, or destruction.
                  </div>

                  <div>
                    In summary, the company uses cookies to improve user
                    experience and automatically collects non-personally
                    identifiable information for the purpose of enhancing
                    services. Users have the option to control cookie acceptance
                    through browser settings, and the company employs security
                    measures to safeguard user information.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Social Networks
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <div>
                    <strong>Definition of Social Networks:</strong>
                  </div>
                  <div>
                    Social networks refer to online groups, networks, or
                    communities where people with common interests connect and
                    explore those interests together on the Internet.
                  </div>

                  <div>
                    <strong>Common Elements:</strong>
                  </div>
                  <div>
                    Members of social networks share common elements, such as
                    particular interests, and are interested in discussing and
                    exploring these shared interests with others online.
                  </div>

                  <div>
                    <strong>Forms of Online Interaction:</strong>
                  </div>
                  <div>
                    Social networking involves online interaction among members
                    through various electronic formats, including chat,
                    messaging, email, video, voice chat, file sharing, blogging,
                    discussion groups, and more.
                  </div>

                  <div>
                    <strong>Features of Social Networks:</strong>
                  </div>
                  <div>
                    Social networks offer features that enable members to create
                    and view profiles of others who share similar interests.
                  </div>
                  <div>
                    Members can create detailed personal profiles and engage in
                    activities such as creating personal blogs and sharing
                    personal&nbsp; &nbsp; information.
                  </div>
                  <div>
                    Social networks facilitate connections among members,
                    allowing them to connect and communicate.
                  </div>

                  <div>
                    In summary, social networks serve as online platforms where
                    individuals with shared interests can connect, communicate,
                    and engage in a variety of digital activities to foster a
                    sense of community and connection.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Disclosure of information to third parties
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <p>
                    We do not sell, trade, license or otherwise disclose to
                    outside parties your personally identifiable information
                    without prior consent from you. However, we may release your
                    information to trusted third parties who assist us in
                    operating our website, conducting our business, or servicing
                    you, as long as those parties agree to keep this information
                    confidential.
                  </p>
                  <p>
                    Furthermore, we may also release your information when
                    required to comply with the law, enforce our site policies,
                    or protect our rights, property, or safety. Besides that, we
                    may also provide non-personally identifiable visitor
                    information to third parties for research, marketing,
                    advertising etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Risk
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <p>
                    Social networks come with inherent risks, mirroring the
                    challenges present in any online activity. Whether in public
                    domains or exclusive social network communities, these
                    platforms are accessible to a broad range of users, raising
                    concerns about the true identity and intentions of fellow
                    members. Corsa Futures lacks control over the actions of
                    third parties who, with access to your information, may
                    exploit it. For instance, divulging personal details could
                    lead to another member copying and disseminating the
                    information without your consent.
                  </p>
                  <p>
                    Exercise caution when sharing personal information on social
                    networks, and carefully scrutinize the information you glean
                    from these platforms. Trusting content posted by others
                    poses risks, as it’s challenging to prevent the
                    dissemination of false or misleading information, including
                    deceptive personal profiles. While Corsa Futures makes
                    reasonable efforts to monitor and purge misleading or
                    fraudulent posts, the detection of all such content is not
                    guaranteed. Members are advised not to rely on or assume the
                    accuracy of information posted by others and should
                    independently make their trading decisions.
                  </p>
                  <p>
                    Furthermore, be mindful of the information you share, as
                    once posted online, you forfeit control over its visibility
                    and usage. Personal data or profile content can be swiftly
                    copied and shared with a wide audience. Additionally,
                    exercise caution when posting materials like photos, as they
                    can be manipulated or distorted. Utilizing Corsa Futures
                    services carries potential risks due to the illicit or
                    inappropriate use of the social network by third parties.
                    These actors may attempt to disseminate misleading
                    information to influence trading decisions, or exploit the
                    platform to copy and aggregate member profiles, gather
                    personal financial information, or misuse personal content
                    for their own purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Third Party links and Advertisements
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <p>
                    This website may display advertisements and provide links to
                    external third-party content. However, it should be noted
                    that such inclusions do not constitute an endorsement by us
                    of any third-party content featured on our website or on any
                    linked external sites. It is crucial for you to be aware
                    that you bear sole responsibility and full liability for
                    engaging with, clicking on, or linking to any such
                    third-party websites. Please be advised that this Privacy
                    Policy does not extend to cover your usage of third-party
                    sites.
                  </p>
                  <p>
                    In compliance with applicable laws, we may share the
                    personal information detailed above with our affiliates for
                    business-related purposes, such as servicing client accounts
                    and informing clients about new products and services. Our
                    affiliates may encompass companies controlled or owned by
                    Corsa Futures, as well as entities with an ownership
                    interest in our company. The information shared with
                    affiliates may encompass any of the details previously
                    described, including your name, address, account
                    information, etc. Our affiliates uphold the privacy of your
                    information to the same extent as Corsa Futures, adhering to
                    the terms outlined in this Policy.
                  </p>
                  <p>
                    Outside the purposes delineated in this Policy, Corsa
                    Futures refrains from disclosing personal information to
                    third parties. Instances of third-party disclosures may
                    involve sharing information with non-affiliated companies
                    rendering support services for your account or facilitating
                    transactions with Corsa Futures. Such disclosures may extend
                    to companies providing professional, legal, or accounting
                    advice to Corsa Futures. Non-affiliated companies aiding
                    Corsa Futures in service provision are obligated to maintain
                    the confidentiality of received information and to utilize
                    your personal information exclusively in the course of
                    delivering services, adhering strictly to the purposes
                    dictated by Corsa Futures. Personal information may also be
                    disclosed to third parties to fulfil your instructions or
                    with your explicit consent, but Corsa Futures will not sell
                    your personal information.
                  </p>
                  <p>
                    Under specific circumstances, Corsa Futures may disclose
                    your personal information to third parties as permitted by
                    or to comply with applicable laws and regulations. Such
                    disclosures may be made to cooperate with regulatory
                    authorities, law enforcement agencies, comply with subpoenas
                    or official requests, and safeguard Corsa Futures’s rights
                    or property. Save for the provisions outlined in this
                    Privacy Policy, your personal information will not be
                    utilized for any other purpose unless explicitly described
                    at the time of disclosure or with your permission.
                  </p>
                  <p>
                    Your data is primarily stored in our database and on our
                    servers, or those of contracted companies processing data on
                    our behalf. For the management and settlement of credit
                    accounts, external contractors may be engaged to perform
                    these tasks. Data is shared with third parties only with
                    your prior consent.
                  </p>
                  <p>
                    Before accessing or using any services on third-party
                    websites, it is imperative to review their Privacy Policy to
                    comprehend how they manage your information. Exercise
                    caution when visiting external sites, and acknowledge that
                    Corsa Futures cannot be held liable for any loss or damage
                    resulting from the use of content, advertisements, or links
                    on this site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Protecting your information
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <p>
                    We have implemented a diverse range of security protocols,
                    including SSL encryption technology, firewalls, and
                    authentication systems (such as passwords and personal
                    identification numbers), to safeguard your personal
                    information and maintain its confidentiality. When
                    collecting data, we store it on highly secured servers in
                    Hong Kong, accessible only to a select group of authorized
                    individuals. To mitigate the risk of data loss or misuse,
                    Corsa Futures has established rigorous technological and
                    operational security measures, subject to regular
                    inspections and updates to align with the latest
                    technological advancements.
                  </p>
                  <p>
                    It is crucial to acknowledge that, despite our efforts, the
                    inherent structure of the internet may expose data to risks
                    beyond our control, as other individuals and entities may
                    not adhere to data protection regulations. Consequently,
                    users bear the specific responsibility of ensuring that
                    their provided data is protected against misuse through
                    encryption or other appropriate means.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Contact Us
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <p>
                    We have implemented a diverse range of security protocols,
                    including SSL encryption technology, firewalls, and
                    authentication systems (such as passwords and personal
                    identification numbers), to safeguard your personal
                    information and maintain its confidentiality. When
                    collecting data, we store it on highly secured servers in
                    Hong Kong, accessible only to a select group of authorized
                    individuals. To mitigate the risk of data loss or misuse,
                    Corsa Futures has established rigorous technological and
                    operational security measures, subject to regular
                    inspections and updates to align with the latest
                    technological advancements.
                  </p>
                  <p>
                    It is crucial to acknowledge that, despite our efforts, the
                    inherent structure of the internet may expose data to risks
                    beyond our control, as other individuals and entities may
                    not adhere to data protection regulations. Consequently,
                    users bear the specific responsibility of ensuring that
                    their provided data is protected against misuse through
                    encryption or other appropriate means.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                Changes to legal requirements
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#privacyPolicyAccordion"
            >
              <div className="accordion-body">
                <div class="toggle_content invers-color " itemprop="text">
                  <p>
                    We have implemented a diverse range of security protocols,
                    including SSL encryption technology, firewalls, and
                    authentication systems (such as passwords and personal
                    identification numbers), to safeguard your personal
                    information and maintain its confidentiality. When
                    collecting data, we store it on highly secured servers in
                    Hong Kong, accessible only to a select group of authorized
                    individuals. To mitigate the risk of data loss or misuse,
                    Corsa Futures has established rigorous technological and
                    operational security measures, subject to regular
                    inspections and updates to align with the latest
                    technological advancements.
                  </p>
                  <p>
                    It is crucial to acknowledge that, despite our efforts, the
                    inherent structure of the internet may expose data to risks
                    beyond our control, as other individuals and entities may
                    not adhere to data protection regulations. Consequently,
                    users bear the specific responsibility of ensuring that
                    their provided data is protected against misuse through
                    encryption or other appropriate means.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageBody>
    </main>
  );
};

export default PrivacyPolicy;
