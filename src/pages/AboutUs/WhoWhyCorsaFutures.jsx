import React from "react";
import PageHeading from "@components/Pages/PageHeading";
import "@styles/AboutUs/WhoWhyCorsaFutures.css";
import Hr from "@components/Hr/Hr";
import PageBody from "@components/Pages/PageBody";

const AboutUs = () => {
  return (
    <>
      <main>
        <PageHeading
          pageTitle="About Us"
          pageHeader="WHO AND WHY CORSA FUTURES"
        >
          <div>
            <p>
              With more than 10 years of experience, Corsa Futures stands as a
              premier provider and trailblazer in CFD trading, consistently
              pushing boundaries through advanced research and development.
            </p>
            <p>
              Our commitment at Corsa Futures is to deliver unparalleled trading
              conditions, leveraging both industry-leading and cutting-edge
              innovative platforms. Through relentless research and development,
              we continuously redefine the limits of liquidity and usability,
              empowering you to thrive in an exceptional trading environment.
            </p>

            <p>+ 10,000+ Trading Products</p>
            <p>+ 126 Mil Trading Volume </p>
            <p>+ 7 Asset Classes</p>
            <p>+ 12 Top – Tier Liquidity Providers </p>
            <p>+ 156 Countries with our Presence </p>
            <p>+ 2 Reputable Regulations </p>
          </div>
        </PageHeading>

        <PageBody>
          <div className="why-us-heading">
            <h1 className="why-us-title">WHY CHOOSE US?</h1>
            <Hr />
          </div>

          <div>
            <img
              className="why-us-img"
              src="https://corsafutures.com/wp-content/uploads/2024/01/09content1.png"
            />
          </div>

          <div className="why-us-start-today">
            <Hr width={"100%"}/>
            <h1 className="why-us-start-today-title">START WITH US TODAY</h1>
            <p>
              Embark on your trading journey with Corsa Futures and discover the
              difference. Our mission is to empower you with the tools and
              knowledge essential for success in the dynamic world of financial
              markets. Together, we can unlock your true potential and guide you
              towards a prosperous and rewarding future.
            </p>

            <p>
              Take the initial step towards financial freedom – sign up with
              Corsa Futures today and become part of a community of driven
              traders and investors prepared to conquer the markets. Let’s grow,
              learn, and succeed together.
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
    </>
  );
};

export default AboutUs;
