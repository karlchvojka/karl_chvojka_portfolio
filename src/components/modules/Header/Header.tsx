// Framework Imports
import React from 'react'

// CSS Imports
import StyledHeader from './StyledHeader'

// Types Declarations
interface HeaderProps {
  id: string
}

/**
 * This the Header component.
 * @param id - ID of the component. Used for CSS Purposes in App
 */
const Header = ( { id }: HeaderProps ) => {
  return (
    <StyledHeader>
      <p>ReactJS Basic Template</p>
    </StyledHeader>
  )
}

export default Header
