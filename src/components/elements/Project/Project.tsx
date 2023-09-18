// Framework Imports
import React from 'react'

// Library Imports
import { AiFillGithub } from "react-icons/ai"

// CSS Imports
import StyledProject from './StyledProject'

// Types Declaration
interface ProjectProps {
  projDesc: string,
  projImg: string,
  projGit: string
  projTech: string,
  projTitle: string,
}

/**
 * Project Component
 * Used to display individual projects on the homepage.
 * @param { string } projDesc Description of the project
 * @param { string } projGit Link to Github repo
 * @param { string } projImg Project screenshot
 * @param { string } projTech TechStack list
 * @param { string } projTitle Project Title
 */
const Project = ({
  projDesc,
  projGit,
  projImg,
  projTech,
  projTitle,
}: ProjectProps) => {
  return (
    <StyledProject projImg={projImg}>
      <section className='projImgWrap'></section>
      <h3 data-testid='projTitle'>{ projTitle }</h3>
      <p data-testid='projDesc'>{ projDesc }</p>
      <h4>Technology Used:</h4>
      <p data-testid='projTech'>{ projTech }</p>
      <a href={projGit} target='blank'><AiFillGithub /> View Project</a>
    </StyledProject>
  )
}

export default Project
