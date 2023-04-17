// Library Imports
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect } from '@jest/globals'
import '@testing-library/jest-dom/'


// Component Imports
import AccordionWrap from './AccordionWrap'

// Test Data Declarations
const accordionItems = [
  {
    def: true,
    key: 'lang',
    title: 'Languages',
    skillList: [
      {
        title: 'HTML5',
        perc: '100%'
      }
    ]
  },
  {
    def: false,
    key: 'videoGames',
    title: 'Video Games',
    skillList: [
      {
        title: 'Being Awesome',
        perc: '100%'
      }
    ]
  }
]

// Mount Accordion Wrap Component and test that key elements are rendered
describe("(Component) Accordion Wrap", () => {

  it("Renders an accordion with two items. The first one open, the other one closed", async () => {
    const { container } = render(
      <AccordionWrap  data={accordionItems} />
    ) 
  
    // Variable Declarations
    const contentArea = screen.getByTestId('accordionWrap')
    // Languages Accordion Item is rendered
    expect(contentArea?.textContent).toContain("Languages")
    expect(contentArea?.textContent).toContain("HTML5")
    expect(contentArea?.textContent).toContain("100%")

    // Video Games accordion Item rendered but closed
    expect(contentArea?.textContent).toContain("Video Games")
    expect(await screen.findByText('Being Awesome')).toBeFalsy;
  })
})