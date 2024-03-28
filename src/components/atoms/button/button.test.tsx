/* eslint-disable vitest/no-commented-out-tests */
import Button, { ButtonSizes, ButtonVariations } from './button'

import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

describe('Button component', () => {
  it('renders default button correctly', () => {
    const { getByText } = render(<Button>Default Button</Button>)
    const button = getByText('Default Button')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('class')).toContain('bg-blue-500')
    expect(button.getAttribute('class')).toContain('py-2')
  })

  it('renders primary button correctly', () => {
    const { getByText } = render(<Button variation={ButtonVariations.Primary}>Primary Button</Button>)
    const button = getByText('Primary Button')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('class')).toContain('bg-blue-500')
  })

  it('renders secondary button correctly', () => {
    const { getByText } = render(<Button variation={ButtonVariations.Secondary}>Secondary Button</Button>)
    const button = getByText('Secondary Button')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('class')).toContain('bg-gray-500')
  })

  it('renders success button correctly', () => {
    const { getByText } = render(<Button variation={ButtonVariations.Success}>Success Button</Button>)
    const button = getByText('Success Button')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('class')).toContain('bg-green-500')
  })

  it('renders danger button correctly', () => {
    const { getByText } = render(<Button variation={ButtonVariations.Danger}>Danger Button</Button>)
    const button = getByText('Danger Button')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('class')).toContain('bg-red-500')
  })

  it('renders small button correctly', () => {
    const { getByText } = render(<Button size={ButtonSizes.Small}>Small Button</Button>)
    const button = getByText('Small Button')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('class')).toContain('py-1')
  })

  it('renders medium button correctly', () => {
    const { getByText } = render(<Button size={ButtonSizes.Medium}>Medium Button</Button>)
    const button = getByText('Medium Button')
    expect(button).toBeInTheDocument()
    expect(button.getAttribute('class')).toContain('py-2')
  })

  it('triggers onClick handler', () => {
    const onClickMock = vi.fn()
    const { getByText } = render(<Button onClick={onClickMock} variation={ButtonVariations.Primary}>Click Me</Button>)
    const button = getByText('Click Me')
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalled()
  })
})
