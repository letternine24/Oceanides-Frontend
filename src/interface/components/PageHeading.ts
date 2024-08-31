export interface IRenderHeading {
  title?: string;
  header: string;
  subHeader?: string;
}

export interface IRenderHeadingWithBg extends IRenderHeading {
  headerImg?: string;
}

export interface IPageHeading {
  pageTitle?: string;
  pageHeader: string;
  pageSubHeader?: string;
  pageBgImg?: string;
  pageHeaderImg?: string;
  children?: React.ReactNode;
}
