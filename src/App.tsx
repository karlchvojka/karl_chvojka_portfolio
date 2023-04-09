// Framework Imports
import React from 'react'

// Library Imports
import { Routes, Route } from 'react-router-dom'

// Component Imports
import Header from 'modules/Header/Header'
import Home from 'pages/Home/Home'
import Resume from 'pages/Resume/Resume'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import GlobalFonts from 'src/globalAssets/fonts/fonts'
import StyledApp from './StyledApp'

const App: React.FC = () => {
  return (
    <StyledApp id='container'>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </StyledApp>
  )
}

export default App
