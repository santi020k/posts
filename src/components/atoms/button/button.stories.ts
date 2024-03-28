import Button, { type ButtonProps, ButtonSizes, ButtonVariations } from './button'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variation: {
      control: { type: 'select' },
      description: 'The variation of button',
      options: Object.values(ButtonVariations),
      table: {
        defaultValue: { summary: ButtonVariations.Primary },
        type: { summary: 'ButtonVariations' }
      }
    },
    size: {
      control: { type: 'select' },
      description: 'The size of button',
      options: Object.values(ButtonSizes),
      table: {
        defaultValue: { summary: ButtonSizes.Medium },
        type: { summary: 'ButtonSizes' }
      }
    }
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variation: ButtonVariations.Primary,
    size: ButtonSizes.Medium
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variation: ButtonVariations.Secondary
  }
}

export const Success: Story = {
  args: {
    label: 'Success Button',
    variation: ButtonVariations.Success
  }
}

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variation: ButtonVariations.Danger
  }
}

export const Small: Story = {
  args: {
    label: 'Primary Button',
    variation: ButtonVariations.Primary,
    size: ButtonSizes.Small
  }
}

export const Medium: Story = {
  args: {
    label: 'Primary Button',
    variation: ButtonVariations.Primary,
    size: ButtonSizes.Medium
  }
}

export const Large: Story = {
  args: {
    label: 'Primary Button',
    variation: ButtonVariations.Primary,
    size: ButtonSizes.Large
  }
}
