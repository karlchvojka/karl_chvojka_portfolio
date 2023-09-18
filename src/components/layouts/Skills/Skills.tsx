// Framework Imports
import React from 'react'

// Component Imports
import AccordionWrap from 'modules/AccordionWrap/AccordionWrap'
import CornerWrap from 'elements/CornerWrap/CornerWrap'

// CSS Imports
import StyledSkills from './StyledSkills'

// Data Imports
import skills from 'globalAssets/data/skills'

/**
 * Skills component.
 */
const Skills = () => {
  return (
    <StyledSkills>
      <CornerWrap className='titleWrap'>
        <h2>Skills</h2>
      </CornerWrap>
     <AccordionWrap data={ skills } />
    </StyledSkills>
  )
}

export default Skills
