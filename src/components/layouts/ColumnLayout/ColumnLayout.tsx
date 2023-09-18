// Framework Imports
import React from 'react'

// CSS Imports
import StyledColumnLayout from './StyledColumnLayout'

// Type Declarations
interface ColumnLayoutProps {
  headlineText: string
}

/**
 * ColumnLayout component.
 * Its purpose is just to give an example of a single column layout.
 * @param headlineText - Text to display inside H1
 */
const ColumnLayout = ({ headlineText }: ColumnLayoutProps) => {
  return (
    <StyledColumnLayout>
      <section id='contentWrap'>
        <h1 data-testid='columnLayoutHeadline'>{ headlineText }</h1>
        <h2>Font Examples:</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Paragraph/body</p>
      </section>
    </StyledColumnLayout>
  )
}

export default ColumnLayout
