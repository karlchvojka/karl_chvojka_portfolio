// Framework Imports
import React from 'react'

// Component Imports
import AccordionItem from 'elements/AccordionItem/AccordionItem'
import CornerWrap from 'elements/CornerWrap/CornerWrap'

// CSS Imports
import StyledAccordionWrap from './StyledAccordionWrap'

// Types Declarations
import { skillItem } from 'src/types/data.interface'

interface skillsSection {
  def: boolean,
  key: string,
  skillList: Array<skillItem>,
  title: string
}

interface AccordionWrapProps {
  data: Array<skillsSection>
}

/**
 * This the AccordionWrap component.
 * @param { array } data - Array of objects.
 */
const AccordionWrap = ({ data }: AccordionWrapProps) => {
  return (
    <StyledAccordionWrap data-testid='accordionWrap'>
      { 
        data.map(( section, index ) => (
          <CornerWrap className={'skillsSection'} key={section.key}>
            <AccordionItem 
              def={section.def}
              skillList={section.skillList}
              title={section.title}
            />
          </CornerWrap>
        ))
      }
    </StyledAccordionWrap>
  )
}

export default AccordionWrap
