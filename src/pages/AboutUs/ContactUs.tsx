import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import PageBody from "@components/Pages/PageBody";
import "@styles/AboutUs/ContactUs.css";

const ContactUs: React.FC = () => {
  return (
    <main>
      <PageHeading pageTitle="About Us" pageHeader="CONTACT US" />

      <PageBody>
        <div className="contact-us-container">
          <div className="contact-us-form">
            <h6 className="contact-us-header">Get in Touch</h6>
            <form>
              <div className="row mb-2">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Country"
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phonenumber"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div className="contact-us-hotline">
            <div className="contact-us-details">
              <span></span>
              <p>
                Suite 5 Horsford’s Business Centre, Long Point Road,
                Charlestown, Nevis.
              </p>
            </div>

            <div className="contact-us-details">
              <span></span>
              <p>support@corsafutures.com</p>
            </div>

            <hr />
            <div className="contact-us-details">
              <span></span>
              <div>
                <h5>LIVE CHAT</h5>
                <p>Contact our 24/5 professional and prompt customer support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-us-start-today">
          <hr className="why-us-start-today-hr" />
          <h1 className="why-us-start-today-title">START WITH US TODAY</h1>
          <p>
            Embark on your trading journey with Corsa Futures and discover the
            difference. Our mission is to empower you with the tools and
            knowledge essential for success in the dynamic world of financial
            markets. Together, we can unlock your true potential and guide you
            towards a prosperous and rewarding future.
          </p>

          <p>
            Take the initial step towards financial freedom – sign up with Corsa
            Futures today and become part of a community of driven traders and
            investors prepared to conquer the markets. Let’s grow, learn, and
            succeed together.
          </p>
          <a
            target="_blank"
            className="btn btn-outline-warning"
            href="https://app.corsafutures.com/login"
            rel="noopener noreferrer"
          >
            Join Us Now
          </a>
        </div>
      </PageBody>
    </main>
  );
};

export default ContactUs;
