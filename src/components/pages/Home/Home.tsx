// Framework Imports
import React from 'react'

// Component Imports
import HeroImage from 'modules/HeroImage/HeroImage'

// CSS Imports
import StyledHome from './StyledHome'

/**
 * This the Home Page.
 */
const Home = () => {
  return (
    <StyledHome>
      <HeroImage />
      <p>Home Page</p>
    </StyledHome>
  )
}

export default Home
