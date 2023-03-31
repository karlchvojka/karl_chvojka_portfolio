// Framework Imports
import React from 'react'

// Component Imports
import HeroImage from 'modules/HeroImage/HeroImage'
import Projects from 'modules/Projects/Projects'

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
    </StyledHome>
  )
}

export default Home
