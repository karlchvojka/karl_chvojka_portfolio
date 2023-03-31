// Framework Imports
import React from 'react'

// Component Imports
import AccordionWrap from 'modules/AccordionWrap/AccordionWrap'

// CSS Imports
import StyledSkills from './StyledSkills'

// Data Imports
import skills from 'globalAssets/data/skills'

/**
 * This the Skills component.
 */
const Skills = () => {
  return (
    <StyledSkills>
      <h2>Skills</h2>
     <AccordionWrap data={skills} />
    </StyledSkills>
  )
}

export default Skills
