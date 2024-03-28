import Button, { type ButtonProps, ButtonSizes, ButtonVariations } from '@/atoms/button/button'

import { twMerge } from 'tailwind-merge'

interface GroupButtonsProps {
  buttons?: ButtonProps[];
  containerProps?: React.ComponentPropsWithoutRef<'div'>;
}

const GroupButtons: React.FC<GroupButtonsProps> = ({ buttons = [], containerProps }) => (
  <div {...containerProps} className={twMerge('flex gap-4', containerProps?.className)}>
    {buttons.map((button, index) => (
      <Button
        key={index}
        onClick={button.onClick}
        type={button.type}
        size={button.size}
      >
        {button.label}
      </Button>
    ))}
  </div>
)

GroupButtons.defaultProps = {
  buttons: [
    { label: 'Primary Button', variation: ButtonVariations.Primary, size: ButtonSizes.Medium, onClick: () => {} },
    { label: 'Secondary Button', variation: ButtonVariations.Secondary, size: ButtonSizes.Medium, onClick: () => {} }
  ]
}

export default GroupButtons
export { type GroupButtonsProps }
