// Framework Imports
import React from 'react'

// Library Imports
import { Link } from 'react-router-dom'

// Asset Imports
import HexaLogo from './assets/hexapixel_logo.jpg'

// CSS Imports
import StyledHeader from './StyledHeader'

/**
 * This the Header component.
 */
const Header = () => {
  return (
    <StyledHeader>
      <img src={HexaLogo} alt='Hexapixel Logo' />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='resume'>Resume</Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
