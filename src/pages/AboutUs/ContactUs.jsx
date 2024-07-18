import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import PageBody from "@components/Pages/PageBody";
import "@styles/AboutUs/ContactUs.css";

const ContactUs = () => {
  return (
    <main>
      <PageHeading pageTitle="About Us" pageHeader="CONTACT US" />

      <PageBody>
        <div className="contact-us-container">
          <div className="contact-us-form">
            <h6 className="contact-us-header">Get in Touch</h6>
            <form>
              <div class="row mb-2">
                <div class="col">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label for="lastname">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastname"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="form-group">
                  <label for="name">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="name"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col">
                  <div class="form-group">
                    <label for="country">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      id="country"
                      placeholder="Country"
                      required
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label for="phonenumber">Phone Number</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phonenumber"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group mb-2">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
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
          <hr className="why-us-start-today-hr"></hr>
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
          <button
            target="_blank"
            className="btn btn-outline-warning"
            href="https://app.corsafutures.com/login"
          >
            Join Us Now
          </button>
        </div>
      </PageBody>
    </main>
  );
};

export default ContactUs;
