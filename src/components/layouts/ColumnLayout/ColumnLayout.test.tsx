// Framework Imports
import React from 'react'

// Library Imports
import '@testing-library/jest-dom/'
import { describe, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

// Component Imports
import ColumnLayout from './ColumnLayout'

/**
 * Column Layout Component Testing
 */
describe('(Component) Column Layout', () => {
  it('Renders the Column Layout component with the string as a header', () => {
    // Mount the component
    const { container } = render(
      <ColumnLayout headlineText='Jest Test' />
    )

    // Variable Declarations
    const headline = screen.getByTestId('columnLayoutHeadline')

    // Title section has 'Skills Test' text.
    expect(headline?.textContent).toContain('Jest Test')
  })
})