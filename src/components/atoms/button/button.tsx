import styles from './button.module.css';

export enum types {
  primary = 'primary',
  secondary = 'secondary'
}

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type: types;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  const buttonClasses = `${styles.button} ${type === types.primary ? styles.primary : styles.secondary}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
