import React, { useEffect, useState } from "react";
import "@styles/Components/PageHeading.css";

const PageHeading = ({ pageTitle, pageHeader, pageBgImg, pageHeaderImg, children }) => {
  const [backgroundImg, setBackgroundImg] = useState("https://corsafutures.com/wp-content/uploads/2024/01/00bg.png");

  useEffect(() => {
    if (pageBgImg) {
      setBackgroundImg(pageBgImg);
    }
  }, [backgroundImg]);

  console.log(backgroundImg);
  return (
    <section
      className="page-heading"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="container ">
        <div className="row page-heading-container">
          {pageTitle && <h3 className="page-heading-title">{pageTitle}</h3>}
          <hr className="page-heading-hr"></hr>
          <h1 className="page-heading-header">{pageHeader}</h1>
        </div>
        <div className={"row page-heading-content " + (pageHeaderImg ? 'page-heading-header-img' : '')}>
          {children}
          {/* {pageHeaderImg && <img src={pageHeaderImg} />} */}
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
