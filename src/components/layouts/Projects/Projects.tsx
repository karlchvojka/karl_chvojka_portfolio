// Framework Imports
import React from 'react'

// Component Imports
import CornerWrap from 'elements/CornerWrap/CornerWrap'
import Project from 'elements/Project/Project'

// CSS Imports
import StyledProjects from './StyledProjects'

// Data Imports
import projects from 'globalAssets/data/projects'

/**
 * This the Projects component.
 */
const Projects = () => {
  return (
    <StyledProjects>
      <h2>projects</h2>
      <section className='projectsWrap'>
        {
          projects.map(( project, index ) => (
            <CornerWrap className='projIndv' key={project.title+index}>
              <Project 
                projTitle={project.title}
                projImg={project.image}
                projDesc={project.desc}
                projTech={project.tech}
                projGit={project.git}
              />
            </CornerWrap>
          ))
        }
      </section>
    </StyledProjects>
  )
}

export default Projects