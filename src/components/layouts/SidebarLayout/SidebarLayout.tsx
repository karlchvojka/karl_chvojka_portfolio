// Framework Imports
import React from 'react'

// CSS Imports
import StyledSidebarLayout from './StyledSidebarLayout'

/**
 * This the SidebarLayout component.
 * 
 * Its purpose is to give an example of a layout with:
 * - Sidebar on the left
 * - Single Content area on the right
 */
const SidebarLayout = () => {
  return (
    <StyledSidebarLayout>
      <section id='sidebarWrap'>
        <p>Sidebar:</p>
      </section>
      <section id='contentWrap'>
        <h1>Sidebar Layout Example</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Paragraph/body</p>
      </section>
    </StyledSidebarLayout>
  )
}

export default SidebarLayout
