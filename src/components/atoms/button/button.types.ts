export enum types {
  primary = 'primary',
  secondary = 'secondary'
}

export interface ButtonProps {
  children?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  type?: types;
}
