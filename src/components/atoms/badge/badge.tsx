import { twMerge } from 'tailwind-merge'

enum BadgeVariations {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger'
}

enum BadgeSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

interface BadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  label?: string;
  variation?: BadgeVariations;
  size?: BadgeSizes;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ label, variation = BadgeVariations.Primary, size = BadgeSizes.Small, children, ...badgeProps }) => {
  const variationToClasses: Record<BadgeVariations, string> = {
    [BadgeVariations.Primary]: 'bg-blue-500',
    [BadgeVariations.Secondary]: 'bg-gray-500',
    [BadgeVariations.Success]: 'bg-green-500',
    [BadgeVariations.Danger]: 'bg-red-500'
  }

  const sizeToClasses: Record<BadgeSizes, string> = {
    [BadgeSizes.Small]: 'px-2 py-1 text-xs',
    [BadgeSizes.Medium]: 'px-3 py-1.5 text-sm',
    [BadgeSizes.Large]: 'px-4 py-2 text-base'
  }

  const badgeClasses = `inline-block font-semibold rounded-full text-white ${sizeToClasses[size]} ${variationToClasses[variation]}`

  return (
    <span {...badgeProps} className={twMerge(badgeClasses, badgeProps.className)}>
      {label ?? children ?? 'Badge'}
    </span>
  )
}

export default Badge
export { type BadgeProps, BadgeVariations, BadgeSizes }
