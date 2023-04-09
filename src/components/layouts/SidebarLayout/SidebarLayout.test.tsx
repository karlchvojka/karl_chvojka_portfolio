// Framework Imports
import React from 'react'

// Library Imports
import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, expect } from '@jest/globals'
import '@testing-library/jest-dom/'

// Component Imports
import SidebarLayout from './SidebarLayout'

describe("(Component) Column Layout", () => {
  it('Renders the Column Layout component with the string as a header', () => {
    // Mount the component
    const { container } = render(
      <SidebarLayout />
    )

    // Variable Declarations
    const headline = screen.getByTestId('SidebarLayoutHeadline')

    // Title section has 'Sidebar Layout Example' text.
    expect(headline?.textContent).toContain("Sidebar Layout Example")
  })
})