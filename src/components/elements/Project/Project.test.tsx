// Library Imports
import '@testing-library/jest-dom/'
import { describe, expect } from '@jest/globals'
import { render, screen, fireEvent, act } from '@testing-library/react'

// Component Imports
import Project from './Project'

// Test Data Declarations
const testProjects = {
  projDesc: 'A cool Project',
  projGit: 'https://www.github.com/fakerepo#1.git',
  projImg: '',
  projTech: 'React, jest stuff',
  projTitle: 'Cool Website'
}

// Mount A Project Component and test Component Initial Render
describe('(Component) Project ', () => {

  // Mount project component
  const { container } = render( 
    <Project
      projDesc={testProjects.projDesc}
      projGit={testProjects.projGit} 
      projImg={testProjects.projImg}
      projTech={testProjects.projTech}
      projTitle={testProjects.projTitle}
    />
  )

  // Variable Declarations
  const projectDesc = screen.getByTestId('projDesc')
  const projectTech = screen.getByTestId('projTech')
  const projectTitle = screen.getByTestId('projTitle')

  it('Renders properly showing data from the testProjects object', () => {
    expect(projectDesc?.textContent).toContain('A cool Project')
    expect(projectTech?.textContent).toContain('React, jest stuff')
    expect(projectTitle?.textContent).toContain('Cool Website')
  })
})