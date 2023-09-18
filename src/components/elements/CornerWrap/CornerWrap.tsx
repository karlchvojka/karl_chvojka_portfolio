// Framework Imports
import React from 'react'

// CSS Imports
import StyledCornerWrap from './StyledCornerWrap'

// Types Declarations
interface CornerWrapProps {
  children: JSX.Element,
  className: string
}

/**
 * CornerWrap component.
 * This is a wrapper component to display a border with a cropped top left corner.
 * @param { JSX } children Element to be contained
 * @param { string } className Class name to be applied to container  
 */
const CornerWrap = ({ children, className }: CornerWrapProps) => {
  return (
    <StyledCornerWrap className={ className }>
      <section className='cornerWrapInner'>
        { children }
      </section>
    </StyledCornerWrap>
  )
}

export default CornerWrap
