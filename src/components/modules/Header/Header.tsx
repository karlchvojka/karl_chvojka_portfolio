// Framework Imports
import React from 'react'

// Library Imports
import { AiFillGithub } from "react-icons/ai"
import { Link } from 'react-router-dom'

// Asset Imports
import HexaLogo from './assets/hexapixel_logo.jpg'

// CSS Imports
import StyledHeader from './StyledHeader'

/**
 * Header component.
 */
const Header = () => {
  return (
    <StyledHeader className="header">
      <img src={ HexaLogo } alt='Hexapixel Logo' />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='resume'>Resume</Link>
        <Link to='https://github.com/karlchvojka/'><AiFillGithub /></Link>
      </nav>
    </StyledHeader>
  )
}

export default Header
