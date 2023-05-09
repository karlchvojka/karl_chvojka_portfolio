// Framework Imports
import React from 'react'

// Types Declarations
interface CornerWrapProps {
  children: JSX.Element,
  className: string
}
// CSS Imports
import StyledCornerWrap from './StyledCornerWrap'

/**
 * This the CornerWrap component.
 * This is a wrapper component to display a border with a cropped top left corner.
 */
const CornerWrap = ({ children, className }: CornerWrapProps) => {
  return (
    <StyledCornerWrap className={className}>
      <section className='cornerWrapInner'>
        {children}
      </section>
    </StyledCornerWrap>
  )
}

export default CornerWrap
