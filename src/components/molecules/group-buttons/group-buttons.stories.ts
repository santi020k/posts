import { ButtonSizes, ButtonVariations } from '@/atoms/button/button'

import GroupButtons, { GroupButtonsProps } from './group-buttons'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  title: 'Design System/Molecules/GroupButtons',
  component: GroupButtons,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof GroupButtons>

export default meta

type Story = StoryObj<GroupButtonsProps>

export const Default: Story = {
  args: {
    buttons: [
      { label: 'Primary Button', variation: ButtonVariations.Primary, size: ButtonSizes.Medium, onClick: fn() },
      { label: 'Secondary Button', variation: ButtonVariations.Secondary, size: ButtonSizes.Medium, onClick: fn() }
    ]
  }
}
