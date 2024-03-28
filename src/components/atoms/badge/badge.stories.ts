import Badge, { type BadgeProps, BadgeSizes, BadgeVariations } from './badge'

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const meta = {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variation: {
      control: { type: 'select' },
      description: 'The variation of badge',
      options: Object.values(BadgeVariations),
      table: {
        defaultValue: { summary: BadgeVariations.Primary },
        type: { summary: 'BadgeVariations' }
      }
    },
    size: {
      control: { type: 'select' },
      description: 'The size of badge',
      options: Object.values(BadgeSizes),
      table: {
        defaultValue: { summary: BadgeSizes.Small },
        type: { summary: 'BadgeSizes' }
      }
    }
  }
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<BadgeProps>

export const Primary: Story = {
  args: {
    label: 'Primary Badge',
    variation: BadgeVariations.Primary,
    size: BadgeSizes.Medium
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Badge',
    variation: BadgeVariations.Secondary
  }
}

export const Success: Story = {
  args: {
    label: 'Success Badge',
    variation: BadgeVariations.Success
  }
}

export const Danger: Story = {
  args: {
    label: 'Danger Badge',
    variation: BadgeVariations.Danger
  }
}

export const Small: Story = {
  args: {
    label: 'Primary Badge',
    variation: BadgeVariations.Primary,
    size: BadgeSizes.Small
  }
}

export const Medium: Story = {
  args: {
    label: 'Primary Badge',
    variation: BadgeVariations.Primary,
    size: BadgeSizes.Medium
  }
}

export const Large: Story = {
  args: {
    label: 'Primary Badge',
    variation: BadgeVariations.Primary,
    size: BadgeSizes.Large
  }
}
