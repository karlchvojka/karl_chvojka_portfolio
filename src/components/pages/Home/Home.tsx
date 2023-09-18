// Framework Imports
import React from 'react'

// Component Imports
import Footer from 'modules/Footer/Footer'
import HeroImage from 'modules/HeroImage/HeroImage'
import Projects from 'layouts/Projects/Projects'
import Skills from 'layouts/Skills/Skills'

// CSS Imports
import StyledHome from './StyledHome'

/**
 * Home Page.
 */
const Home = () => {
  return (
    <StyledHome>
      <HeroImage />
      <Projects />
      <Skills />
      <Footer />
    </StyledHome>
  )
}

export default Home
