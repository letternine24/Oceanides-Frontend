import React from "react";
import "@styles/Components/PageBody.css";

const PageBody = ({ children }) => {
  return (
    <section className="page-body">
      <div className="container">
        <div className="row page-body-content">{children}</div>
      </div>
    </section>
  );
};

export default PageBody;
