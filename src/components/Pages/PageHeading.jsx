import React from "react";
import "@styles/Components/PageHeading.css";

const PageHeading = ({ pageTitle, pageHeader, children }) => {
  return (
    <section className="page-heading">
      <div className="container ">
        <div className="row page-heading-container">
          <h3 className="page-heading-title">{pageTitle}</h3>
          <hr className="page-heading-hr"></hr>
          <h1 className="page-heading-header">{pageHeader}</h1>
        </div>
        <div className="row page-heading-content">{children}</div>
      </div>
    </section>
  );
};

export default PageHeading;
