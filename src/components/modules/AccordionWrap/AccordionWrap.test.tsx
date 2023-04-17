// Library Imports
import '@testing-library/jest-dom/'
import { describe, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

// Component Imports
import AccordionWrap from './AccordionWrap'

// Test Data Declarations
const accordionItems = [
  {
    def: true,
    key: 'lang',
    skillList: [
      {
        perc: '100%',
        title: 'HTML5'
      }
    ],
    title: 'Languages',
  },
  {
    def: false,
    key: 'videoGames',
    skillList: [
      {
        perc: '100%',
        title: 'Being Awesome'
      }
    ],
    title: 'Video Games',
  }
]

// Mount Accordion Wrap Component and test that key elements are rendered
describe('(Component) Accordion Wrap', () => {

  it('Renders an accordion with two items. The first one open, the other one closed', async () => {
    const { container } = render(
      <AccordionWrap  data={accordionItems} />
    ) 
  
    // Variable Declarations
    const contentArea = screen.getByTestId('accordionWrap')

    // Languages Accordion Item is rendered
    expect(contentArea?.textContent).toContain('100%')
    expect(contentArea?.textContent).toContain('HTML5')
    expect(contentArea?.textContent).toContain('Languages')

    // Video Games accordion Item rendered but closed
    expect(contentArea?.textContent).toContain('Video Games')
    expect(await screen.findByText('Being Awesome')).toBeFalsy;
  })
  
})