// Framework Imports
import React from 'react'

// Library Imports
import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

// Component Imports
import App from './App'

/**
 * Renders Landing Page:
 * - Renders basic landing page
 * - Checks for header with the text "ReactJS Basic Template"
 */
test('renders the landing page', async () => {
  // Render App
  render(<App />, { wrapper: BrowserRouter })

  // Asyncronously extract header with new text
  const header = await screen.findByText("Heya! I'm Karl Chvojka.")

  // Assert header to have text.
  expect(header).toBeInTheDocument();
})