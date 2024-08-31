export interface IButton {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}
