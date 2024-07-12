import React from "react";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "@styles/AboutUs/RegulatorySupervision.css";

const RegulatorySupervision = () => {
  return (
    <>
      <Header />
      <main>
        <section className="regulatory-supervision">
          <div className="container">
            <h5>About Us</h5>
            <hr className="corsa-hr" />
            <h1>REGULATORY SUPERVISION</h1>

            <div className="regulatory-supervision-description">
              <h1>REGULATORY SUPERVISION</h1>
              <p>
                Corsa Futures is regulated by two of the world’s leading
                financial jurisdictions. Rest assured that our clients trade
                with a safe and secure company.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="certificate">
              <div className="certificate-img-container">
                <img
                  className="certificate-img"
                  src="https://corsafutures.com/wp-content/uploads/2024/02/Corsa-Group-Intervest-LTD-1-1.png"
                />
              </div>

              <div className="certificate-text-container">
                <h1 className="certificate-text-title">
                  Incorporated by the Island of Nevis
                </h1>
                <p className="certificate-text-description">
                  Corsa Group Intervest LTD is authorized and incorporated by
                  the Island of Nevis (No. C 57421)
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="certificate">
              <div className="certificate-img-container">
                <img
                  className="certificate-img"
                  src="https://corsafutures.com/wp-content/uploads/2024/02/NFA.png"
                />
              </div>

              <div className="certificate-text-container">
                <h1 className="certificate-text-title">
                  National Futures Association (NFA)
                </h1>
                <p className="certificate-text-description">
                  Corsa Group Intervest LTD has been authorized by the National
                  Futures Association (NFA) Regulatory Authorization Certificate
                  NFA ID: 0561416
                </p>
              </div>
            </div>

            <div className="certificate">
              <div className="certificate-img-container">
                <img
                  className="certificate-img"
                  src="https://corsafutures.com/wp-content/uploads/2024/02/IL.png"
                />
              </div>

              <div className="certificate-text-container">
                <h1 className="certificate-text-title">
                  Bloomberg LEI Accreditation
                </h1>
                <p className="certificate-text-description">
                  LEI Bloomberg Finance LP is an accredited issuer of the Legal
                  Entity Identifier (LEI). As a Local Operating Unit (LOU) of
                  the Global Legal Entity Identifier System, it has been
                  accepted for global use and has become a reporting requirement
                  for several market regulators and authorities. Corsa Group
                  Intervest LTD is fully compliant under LEI via LEI Bloomberg
                  Finance LP with the following details:
                  <br />
                  Legal Entity Name: Corsa Group Intervest LTD
                  <br />
                  LEI Number: 5493001KJTIIGC8Y1R12
                </p>
                <p className="certificate-text-description">
                  The BLOOMBERG LEI is designed to uniquely identify legal
                  entities that are participants in financial transactions,
                  thereby helping to create greater transparency in the
                  marketplace. The standard for this identifier and its
                  associated reference data has been established in ISO 17442.
                  It has been accepted for global use and has become a reporting
                  requirement for several market regulators and authorities.
                  Most notably, the LEI has been a requirement of MiFID I for
                  all counterparties to transactions. In addition, several
                  regulatory authorities in countries outside Europe also
                  already require financial counterparties to obtain an LEI for
                  various trade and transaction reporting activities The
                  Securities Financing Transactions Regulation (SFTR) will
                  obligate participants to meet requirements for LEI
                  registration. The intention of the regulation is to promote
                  transparency in the financial system, specifically of the
                  securities financing transaction market.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegulatorySupervision;
