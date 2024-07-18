import React, { useEffect, useState } from "react";
import "@styles/Components/PageHeading.css";

const PageHeading = ({ pageTitle, pageHeader, pageBgImg, children }) => {
  const [backgroundImg, setBackgroundImg] = useState("https://corsafutures.com/wp-content/uploads/2024/01/00bg.png");

  useEffect(() => {
    if (pageBgImg) {
      setBackgroundImg(pageBgImg);
    }
  }, [backgroundImg]);

  // const renderHeadingWithBg = () => { 
  //   return ( 

  //   );
  // }




  return (
    <section
      className="page-heading"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="container">
        <div className="row page-heading-container">
          {pageTitle && <h3 className="page-heading-title">{pageTitle}</h3>}
          <div className="page-heading-hr"></div>
          <h1 className="page-heading-header">{pageHeader}</h1>
        </div>
        <div className={"row page-heading-content"}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
