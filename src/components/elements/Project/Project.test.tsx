// Library Imports
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect } from '@jest/globals'
import '@testing-library/jest-dom/'

// Component Imports
import Project from './Project'

// Test Data Declarations
const testProjects = {
  projTitle: 'Cool Website',
  projImg: '',
  projDesc: 'A cool Project',
  projTech: 'React, jest stuff',
  projGit: 'https://www.github.com/fakerepo#1.git'
}

// Mount A Project Component and test Component Initial Render
describe("(Component) Project ", () => {
  const { container } = render( 
    <Project 
     projTitle={testProjects.projTitle}
     projImg={testProjects.projImg}
     projDesc={testProjects.projDesc}
     projTech={testProjects.projTech}
     projGit={testProjects.projGit} 
    />
  )

  // Variable Declarations
  const projectTitle = screen.getByTestId('projTitle')
  const projectDesc = screen.getByTestId('projDesc')
  const projectTech = screen.getByTestId('projTech')

  it("Renders properly showing data from the testProjects object", () => {
    expect(projectTitle?.textContent).toContain('Cool Website')
    expect(projectDesc?.textContent).toContain('A cool Project')
    expect(projectTech?.textContent).toContain('React, jest stuff')
  })
})