// Framework Imports
import React from 'react'

// Component Imports
import Footer from 'modules/Footer/Footer'
import Header from 'modules/Header/Header'
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
      <Header id='headerWrap' />
      <HeroImage />
      <Projects />
      <Skills />
      <Footer />
    </StyledHome>
  )
}

export default Home
