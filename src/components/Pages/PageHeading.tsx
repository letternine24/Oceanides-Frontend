import React, { useEffect, useState } from "react";
import "@styles/Components/PageHeading.css";
import Images from "@components/Images/Images";
import Hr from "@components/Hr/Hr";
import {
  IPageHeading,
  IRenderHeading,
  IRenderHeadingWithBg,
} from "@/interface/components/PageHeading";

const RenderHeading: React.FC<IRenderHeading> = ({
  title,
  header,
  subHeader,
}) => {
  return (
    <div className="container page-heading-container">
      {title && <h3 className="page-heading-title">{title}</h3>}
      <Hr />
      <h1 className="page-heading-header">{header}</h1>
      {subHeader && <p>{subHeader}</p>}
    </div>
  );
};

const RenderHeadingWithBg: React.FC<IRenderHeadingWithBg> = ({
  title,
  header,
  headerImg,
  subHeader,
}) => {
  return (
    <div className="container page-heading-container page-heading-container-bg">
      <RenderHeading title={title} header={header} subHeader={subHeader} />
      {headerImg && (
        <Images
          name={headerImg}
          style={{ maxWidth: "350px", maxHeight: "350px" }}
        />
      )}
    </div>
  );
};

const PageHeading: React.FC<IPageHeading> = ({
  pageTitle,
  pageHeader,
  pageSubHeader,
  pageBgImg,
  pageHeaderImg,
  children,
}) => {
  const [backgroundImg, setBackgroundImg] = useState<string>(
    "https://corsafutures.com/wp-content/uploads/2024/01/00bg.png"
  );

  useEffect(() => {
    if (pageBgImg) {
      setBackgroundImg(pageBgImg);
    }
  }, [pageBgImg]);

  return (
    <section
      className="page-heading"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="container">
        {pageHeaderImg ? (
          <RenderHeadingWithBg
            title={pageTitle}
            header={pageHeader}
            headerImg={pageHeaderImg}
            subHeader={pageSubHeader}
          />
        ) : (
          <RenderHeading
            title={pageTitle}
            header={pageHeader}
            subHeader={pageSubHeader}
          />
        )}
        <div className="row page-heading-content">{children}</div>
      </div>
    </section>
  );
};

export default PageHeading;
