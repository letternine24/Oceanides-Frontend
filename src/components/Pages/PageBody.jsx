import React, { useEffect, useState } from "react";
import "@styles/Components/PageBody.css";

const PageBody = ({pageBgImg, children }) => {

  const [backgroundImg, setBackgroundImg] = useState('');

  useEffect(() => {
    if (pageBgImg) {
      setBackgroundImg(pageBgImg);
    }
  }, [backgroundImg]);

  return (
    <section className="page-body" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="container">
        <div className="row page-body-container">
        </div>
        <div className="row page-body-content">{children}</div>
      </div>
    </section>
  );
};

export default PageBody;
