import { ButtonSizes, ButtonVariations } from '@/atoms/button/button'

import GroupButtons from './group-buttons'

import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

describe('GroupButtons component', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders GroupButtons component correctly', () => {
    const { getByText } = render(<GroupButtons />)
    const primaryButton = getByText('Primary Button')
    const secondaryButton = getByText('Secondary Button')
    expect(primaryButton).toBeInTheDocument()
    expect(secondaryButton).toBeInTheDocument()
  })

  it('triggers onClick when buttons are clicked', () => {
    const handleClickMock = vi.fn()
    const buttons = [
      { label: 'Primary Button', variation: ButtonVariations.Primary, size: ButtonSizes.Medium, onClick: handleClickMock },
      { label: 'Secondary Button', variation: ButtonVariations.Secondary, size: ButtonSizes.Medium, onClick: handleClickMock }
    ]
    const { getByText } = render(<GroupButtons buttons={buttons} />)
    const primaryButton = getByText('Primary Button')
    const secondaryButton = getByText('Secondary Button')

    fireEvent.click(primaryButton)
    fireEvent.click(secondaryButton)

    expect(handleClickMock).toHaveBeenCalledTimes(2)
  })
})
