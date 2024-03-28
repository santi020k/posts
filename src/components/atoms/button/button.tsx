'use client'
import { twMerge } from 'tailwind-merge'

enum ButtonVariations {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger'
}

enum ButtonSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  variation?: ButtonVariations;
  size?: ButtonSizes;
}

const Button: React.FC<ButtonProps> = ({ children, label, variation = ButtonVariations.Primary, size = ButtonSizes.Medium, ...buttonProps }) => {
  const variationToClasses: Record<ButtonVariations, string> = {
    [ButtonVariations.Primary]: 'bg-blue-500 hover:bg-blue-600',
    [ButtonVariations.Secondary]: 'bg-gray-500 hover:bg-gray-600',
    [ButtonVariations.Success]: 'bg-green-500 hover:bg-green-600',
    [ButtonVariations.Danger]: 'bg-red-500 hover:bg-red-600'
  }

  const sizeToClasses: Record<ButtonSizes, string> = {
    [ButtonSizes.Small]: 'py-1 px-2 text-sm',
    [ButtonSizes.Medium]: 'py-2 px-4',
    [ButtonSizes.Large]: 'py-3 px-6 text-lg'
  }

  const buttonClasses = `rounded-md text-white focus:outline-none ${sizeToClasses[size]} ${variationToClasses[variation]}`

  return (
    <button {...buttonProps} className={twMerge(buttonClasses, buttonProps.className)}>
      {label ?? children ?? 'Button'}
    </button>
  )
}

export default Button
export { type ButtonProps, ButtonVariations, ButtonSizes }
