// Library Imports
import { createGlobalStyle } from 'styled-components'

// Font File Imports
import LatoReg from './Lato/Lato-Regular.ttf'
import MonserratReg from './Montserrat/static/Montserrat-Regular.ttf'
import MonserratBold from './Montserrat/static/Montserrat-Bold.ttf'
import RobotoCond from './Roboto_Condensed/RobotoCondensed-Regular.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoReg}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MonserratReg}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratBold';
    src: url(${MonserratBold}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto Condensed';
    src: url(${RobotoCond}) format('truetype');
  }
`
