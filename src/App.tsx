// Framework Imports
import React from 'react'

// Library Imports
import { Routes, Route } from 'react-router-dom'

// Component Imports
import Header from 'modules/Header/Header'
import Footer from 'modules/Footer/Footer'
import ColumnLayout from 'layouts/ColumnLayout/ColumnLayout'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App: React.FC = () => {
  return (
    <StyledApp id='container'>
      <GlobalStyle />
      <Header id='headerWrap' />
      <Routes>
        <Route path='/' element={<ColumnLayout headlineText='Karl Chvojkas Portfolio' />} />
      </Routes>
      <Footer />
    </StyledApp>
  )
}

export default App
