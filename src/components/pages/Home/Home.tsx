// Framework Imports
import React from 'react'

// Component Imports
import HeroImage from 'modules/HeroImage/HeroImage'
import Projects from 'layouts/Projects/Projects'
import Skills from 'layouts/Skills/Skills'

// CSS Imports
import StyledHome from './StyledHome'

/**
 * This the Home Page.
 */
const Home = () => {
  return (
    <StyledHome>
      <HeroImage />
      <Projects />
      <Skills />
    </StyledHome>
  )
}

export default Home
