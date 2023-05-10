// Framework Imports
import React from 'react'

// Library Imports
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'

// Component Imports
import App from './src/App'

// Variable Definitiions
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
