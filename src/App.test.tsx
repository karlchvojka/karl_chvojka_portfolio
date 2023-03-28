// Framework Imports
import React from 'react'

// Library Imports
import { render, screen } from '@testing-library/react'

// Component Imports
import App from './App'

/**
 * Renders Landing Page:
 * - Renders basic landing page
 * - Checks for header with the text "ReactJS Basic Template"
 */
test('renders the landing page', async () => {
  // Render App
  render(<App />)

  // Asyncronously extract header with new text
  const header = await screen.findByText('ReactJS Basic Template 2023')

  // Assert header to have text.
  expect(header).toBeInTheDocument();
})