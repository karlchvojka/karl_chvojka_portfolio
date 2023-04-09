// Framework Imports
import React from 'react'

// Library Imports
import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, expect } from '@jest/globals'
import '@testing-library/jest-dom/'

// Component Imports
import ColumnLayout from './ColumnLayout'

describe("(Component) Column Layout", () => {
  it('Renders the Column Layout component with the string as a header', () => {
    // Mount the component
    const { container } = render(
      <ColumnLayout headlineText='Jest Test' />
    )

    // Variable Declarations
    const headline = screen.getByTestId('columnLayoutHeadline')

    // Title section has 'Skills Test' text.
    expect(headline?.textContent).toContain("Jest Test")
  })
})