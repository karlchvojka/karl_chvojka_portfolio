// Framework Imports
import React from 'react'
import renderer from 'react-test-renderer'

// Library Imports
import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, expect } from '@jest/globals'
import '@testing-library/jest-dom/'

// Component Imports
import Resume from './Resume'

describe("(Component) Column Layout", () => {
  it('Matches DOM Snapshot', () => {
    const domTree = renderer.create(<Resume />).toJSON();
    expect(domTree).toMatchSnapshot();
  })
})