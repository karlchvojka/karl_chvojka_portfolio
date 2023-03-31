// Library Imports
import { createGlobalStyle } from 'styled-components'
import media from 'globalConfig/mobile'

// Variable Imports
import { defaultColors } from './colors'

const GlobalStyle = createGlobalStyle`  
  /*
    START OF RESET
    http://meyerweb.com/eric/tools/css/reset/
     v5.0.1 | 20191019
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* END OF RESET */

  /* GLOBAL DEFAULTS */
  html {
    color: ${defaultColors.cyberBlue};
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
  }

  body {
    background-color: ${defaultColors.darkGrey};
  }

  h1 {
    font-family: 'MontserratBold', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  h2 {
    font-family: 'MontserratBold', sans-serif;
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 20px;
    margin-top: 20px;
    text-transform: uppercase;
  }

  h3 {
    font-family: 'MontserratBold', sans-serif;
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  h4 {
    font-family: 'MontserratBold', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom:20px;
    text-transform: uppercase;
  }

  h5 {
    font-family: 'MontserratBold', sans-serif;
    font-size: 1.25rem;
    line-height: 1.5;
    text-transform: uppercase;
  }

  h6 {
    font-family: 'MontserratBold', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    text-transform: uppercase;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom:10px;
  }

  a {
    font-family: 'Montserrat', sans-serif;
    font-size:1rem;
    text-decoration: none;
  }

  a:link, a:visited {
    color: ${defaultColors.orange};
    text-decoration: none;
  }

  a:hover {
    color: ${defaultColors.cyberBlue};
  }

  /* END GLOBAL DEFAULTS */

  /* MOBILE FIRST DEFAULT STYLES */
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
  }

  h5 {
    font-size: 1rem;
    font-weight: 700;
    font-style: italic;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
  }
  /* Min width of 375 */
    ${media.iphoneSe `
      
    `}

  /* Min width of 414 */
    ${media.iphoneXr `
      
    `}

  /* Min width of 576 */
    ${media.landscapePhones `
      
    `}

  /* Min width of 768 */
    ${media.tablet `

      // Font Sizes
      h1 {
        font-size: 2.25rem;
      }

      h2 {
        font-size: 2rem;
      }
    
      h3 {
        font-size: 1.75rem;
      }
    
      h4 {
        font-size: 1.5rem;
      }
    
      h5 {
        font-size: 1.5rem;
      }
    
      h6 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    `}

  /* Min width of 1024 */
    ${media.desktop `
      // Font Sizes
      h1 {
        font-size: 2.5rem;
      }
      
      h2 {
        font-size: 2.25rem;
      }
    
      h3 {
        font-size: 2rem;
      }
    
      h4 {
        font-size: 1.75rem;
      }
    
      h5 {
        font-size: 1.75rem;
      }
    
      h6 {
        font-size: 1.75rem;
      }

      p {
        font-size: 1.5rem;
      }
    `}

  /* Min width of 1200 */
    ${media.widescreen `

    // Font Sizes
      h1 {
        font-size: 3rem;
      }
      
      h2 {
        font-size: 2.75rem;
      }
    
      h3 {
        font-size: 2.5rem;
      }
    
      h4 {
        font-size: 2.25rem;
      }
    
      h5 {
        font-size: 2.25rem;
      }
    
      h6 {
        font-size: 2.25rem;
      }
    `}

  /* Min width of 1980 */
    ${media.udh `
    
    // Font Sizes
      h1 {
        font-size: 3.5rem;
      }
      h2 {
        font-size: 3rem;
      }
    
      h3 {
        font-size: 2.75rem;
      }
    
      h4 {
        font-size: 2.5rem;
      }
    
      h5 {
        font-size: 2.5rem;
      }
    
      h6 {
        font-size: 2.5rem;
      }
    `}
`

export default GlobalStyle
