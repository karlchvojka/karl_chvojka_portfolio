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
 * Projects component
 */
const Projects = () => {
  return (
    <StyledProjects>
      <CornerWrap className="titleWrap">
        <h2>Projects</h2>
      </CornerWrap>
      <section className='projectsWrap'>
        {
          projects.map(( project, index ) => (
            <CornerWrap className='projIndv' key={ project.title+index }>
              <Project
                projDesc={ project.desc }
                projGit={ project.git }
                projImg={ project.image }
                projTech={ project.tech }
                projTitle={ project.title }
              />
            </CornerWrap>
          ))
        }
      </section>
    </StyledProjects>
  )
}

export default Projects