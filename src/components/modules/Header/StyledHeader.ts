// Library Imports
import styled from 'styled-components'
import media from 'globalConfig/mobile'

// Variable Imports
import { defaultColors } from 'globalConfig/colors'

const StyledHeader = styled.header`
/* MOBILE FIRST DEFAULT STYLES */
background-color: #ffffff;
display: grid;
grid-template-columns: 35px 130px;
justify-content: space-between;
left: 0;
padding: 10px;
position: fixed;
top: 0;
width: calc(100% - 20px);
z-index: 5;

img {
  width: 35px;
}

nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 130px;

  a:link, a:visited {
    color: ${defaultColors.darkGrey};
    font-family: 'MontserratBold', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
  }

  a:hover, a:active {
    color: ${defaultColors.orange};
  }
}

/* Min width of 768 */
  ${media.tablet `
    grid-template-columns: 35px 150px;

    nav {
      grid-template-columns: 42% 58%;
      column-gap: 10px;
    }
  `}

  @media print {
    display:none;
  }
`

export default StyledHeader
