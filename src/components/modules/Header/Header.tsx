// Framework Imports
import React from 'react'

// Library Imports
import { Link } from 'react-router-dom'

// Asset Imports
import HexaLogo from './assets/hexapixel_logo.jpg'

// CSS Imports
import StyledHeader from './StyledHeader'

// Types Declarations
interface HeaderProps {
  id: string
}

/**
 * This the Header component.
 */
const Header = ( { id }: HeaderProps ) => {
  return (
    <StyledHeader>
      <img src={HexaLogo} alt="Hexapixel Logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="resume">Resume</Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
