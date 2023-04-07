// Framework Imports
import React, { useState } from 'react'

// Library Imports
import { render, screen, act, fireEvent, getByTestId, getByText, within, queryByTestId } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals'
import '@testing-library/jest-dom/'


// Component Imports
import AccordionItem from './AccordionItem'

// Test Data Declarations
const skillList = [
  {
    title: 'HTML5',
    perc: '100%',
  }
]

// Mount Accordion Item Component and test if key elements are rendered
describe("(Component) Accordion Item", () => {
  const { container } = render(
    <AccordionItem
      title={'Skills Test'}
      def={true}
      skillList={skillList}
    />
  )
  
  // Variable Declarations
  const contentArea = screen.getByTestId('accordionItemContent')
  const titleButton = screen.getByTestId('accordionItemTitleText')
  const progressBarText = screen.getByTestId('progressBarText')

  it("Renders the AccordionItemContent area open if isActive is true.", () => {
    // Title section has 'Skills Test' text.
    expect(titleButton?.textContent).toContain("Skills Test")

    // The accordion item is currently open.
    expect(contentArea?.textContent).toContain("HTML5")
    expect(progressBarText?.textContent).toContain("100%")
  })

  it("should update isActive state to false on click of title", () => {
    // Title section has rendered 'Skills Test' title button.
    expect(titleButton?.textContent).toContain("Skills Test")

    // The accordion item is currently open, showing the HTML5 text.
    expect(contentArea?.textContent).toContain("HTML5")

    // Click on the Title section
    fireEvent.click(titleButton)

    // The Accordion shouls be closed, and thus Null.
    expect(screen.queryByText("HTML5")).toBeNull()
  })


})