import React, { useEffect, useState } from "react";
import "@styles/Components/PageBody.css";
import { IPageBody } from "@/interface/components/PageBody";

const PageBody: React.FC<IPageBody> = ({ pageBgImg, children }) => {
  const [backgroundImg, setBackgroundImg] = useState<string>("");

  useEffect(() => {
    if (pageBgImg) {
      setBackgroundImg(pageBgImg);
    }
  }, [pageBgImg]); // This dependency should be `pageBgImg` instead of `backgroundImg`

  return (
    <section
      className="page-body"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="container">
        <div className="row page-body-container"></div>
        <div className="row page-body-content">{children}</div>
      </div>
    </section>
  );
};

export default PageBody;
