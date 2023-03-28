// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'
import Footer from 'modules/Footer/Footer'

// Component Imports
import ColumnLayout from 'layouts/ColumnLayout/ColumnLayout'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App: React.FC = () => {
  return (
    <StyledApp id='container'>
      <GlobalStyle />
      <Header id='headerWrap' />
      <ColumnLayout 
        headlineText='ReactJS Basic Template 2023'
      />
      <Footer />
    </StyledApp>
  )
}

export default App
