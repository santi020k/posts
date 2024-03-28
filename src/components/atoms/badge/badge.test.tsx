import Badge, { BadgeSizes, BadgeVariations } from './badge'

import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Badge component', () => {
  it('renders default badge correctly', () => {
    const { getByText } = render(<Badge label="Default" />)
    const badge = getByText('Default')
    expect(badge).toBeInTheDocument()
    expect(badge.getAttribute('class')).toContain('bg-blue-500')
    expect(badge.getAttribute('class')).toContain('py-1')
  })

  it('renders primary badge correctly', () => {
    const { getByText } = render(<Badge label="Primary" variation={BadgeVariations.Primary} />)
    const badge = getByText('Primary')
    expect(badge).toBeInTheDocument()
    expect(badge.getAttribute('class')).toContain('bg-blue-500')
  })

  it('renders secondary badge correctly', () => {
    const { getByText } = render(<Badge label="Secondary" variation={BadgeVariations.Secondary} />)
    const badge = getByText('Secondary')
    expect(badge).toBeInTheDocument()
    expect(badge.getAttribute('class')).toContain('bg-gray-500')
  })

  it('renders success badge correctly', () => {
    const { getByText } = render(<Badge label="Success" variation={BadgeVariations.Success} />)
    const badge = getByText('Success')
    expect(badge).toBeInTheDocument()
    expect(badge.getAttribute('class')).toContain('bg-green-500')
  })

  it('renders danger badge correctly', () => {
    const { getByText } = render(<Badge label="Danger" variation={BadgeVariations.Danger} />)
    const badge = getByText('Danger')
    expect(badge).toBeInTheDocument()
    expect(badge.getAttribute('class')).toContain('bg-red-500')
  })

  it('renders small badge correctly', () => {
    const { getByText } = render(<Badge label="Small" size={BadgeSizes.Small} />)
    const badge = getByText('Small')
    expect(badge).toBeInTheDocument()
    expect(badge.getAttribute('class')).toContain('px-2')
    expect(badge.getAttribute('class')).toContain('py-1')
  })

  it('renders medium badge correctly', () => {
    const { getByText } = render(<Badge label="Medium" size={BadgeSizes.Medium} />)
    const badge = getByText('Medium')
    expect(badge).toBeInTheDocument()
    expect(badge.getAttribute('class')).toContain('px-3')
    expect(badge.getAttribute('class')).toContain('py-1.5')
  })

  it('renders large badge correctly', () => {
    const { getByText } = render(<Badge label="Large" size={BadgeSizes.Large} />)
    const badge = getByText('Large')
    expect(badge).toBeInTheDocument()
    expect(badge.getAttribute('class')).toContain('px-4')
    expect(badge.getAttribute('class')).toContain('py-2')
  })
})
