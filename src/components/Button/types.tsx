export interface IButtonBase{
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children?: JSX.Element | JSX.Element[] | string ;
  filgree?: boolean;
}