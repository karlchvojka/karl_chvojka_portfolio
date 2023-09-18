// Framework Imports
import React from 'react'

// Library Imports
import '@testing-library/jest-dom/'
import { describe, expect } from '@jest/globals'
import { act, fireEvent, render, screen } from '@testing-library/react'

// Component Imports
import AccordionItem from './AccordionItem'

// Test Data Declarations
const skillList = [
  {
    perc: '100%',
    title: 'HTML5'
  }
]

/**
 * Accordion Item Unit Testing
 */
describe('(Component) Accordion Item', () => {

  it('Renders the AccordionItemContent area open if isActive is true.', () => {

    // Mount Accordion Item
    const { container } = render(
      <AccordionItem
        def={ true }
        skillList={ skillList }
        title={ 'Skills Test' }
      />
    )

    // Variable Declarations
    const contentArea = screen.getByTestId('accordionItemContent')
    const progressBarText = screen.getByTestId('progressBarText')
    const titleButton = screen.getByTestId('accordionItemTitle')

    // Title section has 'Skills Test' text.
    expect(titleButton?.textContent).toContain('Skills Test')

    // The accordion item is currently open.
    expect(contentArea?.textContent).toContain('HTML5')
    expect(progressBarText?.textContent).toContain('100%')
  })

  it('should update isActive state to false on click of title', async () => {

    // Mount Accordion Item
    const { container } = render(
      <AccordionItem
        def={ true }
        skillList={ skillList }
        title={ 'Skills Test' }
      />
    )

    // Variable Declarations
    const contentArea = screen.getByTestId('accordionItemContent')
    const handleClick = jest.spyOn(React, 'useState')
    const titleButton = screen.getByTestId('accordionItemTitle')
    const titleText = screen.getByTestId('accordionItemTitleText')

    // Title section has rendered 'Skills Test' title button.
    expect(titleText?.textContent).toContain('Skills Test')

    // The accordion item is currently open, showing the HTML5 text.
    expect(contentArea?.textContent).toContain('HTML5')

    // Click on the Title section
    act( () => fireEvent.click(titleButton) )
    expect(handleClick).toHaveBeenCalled()

    // The Accordion shouls be closed, and thus Null.
    expect(await screen.findByText('HTML5')).toBeFalsy;

    // Click on the Title section
    act( () => fireEvent.click(titleButton) )

    // Expect click to be called, and the accordion to be closed.
    expect(handleClick).toHaveBeenCalled()
    expect(contentArea?.textContent).toContain('HTML5')

  })

})