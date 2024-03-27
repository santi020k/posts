import { type ButtonProps, types } from './button.types'

import styles from './button.module.css'

const Button: React.FC<ButtonProps> = ({ children, label, onClick, type }) => {
  const buttonClasses = `${styles.button} ${type === types.secondary
    ? styles.secondary
    : styles.primary}`

  return (
    <button className={buttonClasses} onClick={onClick}>
      {label ?? children ?? 'Button'}
    </button>
  )
}

export default Button

export { ButtonProps, types }
