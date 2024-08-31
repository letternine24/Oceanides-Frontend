interface ITab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface ITabs {
  tabs: ITab[];
}
