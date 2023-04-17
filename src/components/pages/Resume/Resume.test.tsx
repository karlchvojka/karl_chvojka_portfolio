// Framework Imports
import React from 'react'

// Library Imports
import '@testing-library/jest-dom/'
import { describe, expect } from '@jest/globals'
import renderer from 'react-test-renderer'

// Component Imports
import Resume from './Resume'

describe('(Component) Column Layout', () => {
  it('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<Resume />).toJSON();
    expect(domTree).toMatchSnapshot();
  })
})