// Framework Imports
import React from 'react'

// CSS Imports
import StyledProject from './StyledProject'

// Types Declaration
interface ProjectProps {
  projTitle: string,
  projImg: string,
  projDesc: string,
  projTech: string,
  projGit: string
}

/**
 * This the Project component.
 */
const Project = ({
  projTitle,
  projImg,
  projDesc,
  projTech,
  projGit,
}: ProjectProps) => {
  return (
    <StyledProject projImg={projImg}>
      <section className='projImgWrap'></section>
      <h3>{projTitle}</h3>
      <p>{projDesc}</p>
      <h4>Technology Used:</h4>
      <p>{projTech}</p>
      <a href={projGit} target='blank'><i className='fa fa-github'></i>View Project</a>
    </StyledProject>
  )
}

export default Project
