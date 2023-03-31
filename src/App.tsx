// Framework Imports
import React from 'react'

// Library Imports
import { Routes, Route } from 'react-router-dom'

// Component Imports
import Header from 'modules/Header/Header'
import Home from 'pages/Home/Home'
import Footer from 'modules/Footer/Footer'
import ColumnLayout from 'layouts/ColumnLayout/ColumnLayout'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import GlobalFonts from 'src/globalAssets/fonts/fonts'
import StyledApp from './StyledApp'

const App: React.FC = () => {
  return (
    <StyledApp id='container'>
      <GlobalFonts />
      <GlobalStyle />
      <Header id='headerWrap' />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </StyledApp>
  )
}

export default App
