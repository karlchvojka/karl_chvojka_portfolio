// Framework Imports
import React from 'react'

// Library Imports
import { AiFillGithub } from "react-icons/ai"

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
      <h3 data-testid='projTitle'>{projTitle}</h3>
      <p data-testid='projDesc'>{projDesc}</p>
      <h4>Technology Used:</h4>
      <p data-testid='projTech'>{projTech}</p>
      <a href={projGit} target='blank'><AiFillGithub /> View Project</a>
    </StyledProject>
  )
}

export default Project
