export interface ILink {
  id: number;
  url: string;
  title: string;
}

export interface IPageLinks {
  links: ILink[];
  additionalStyles?: React.CSSProperties;
}
