// Library Imports
import styled from 'styled-components'
import media from 'globalConfig/mobile'

// Asset Imports
import bg from 'globalAssets/images/hexrepeat2.jpg'
import { defaultColors } from 'globalConfig/colors'

const StyledResume = styled.section`
  /** FONT RESET */
  background-color: "#ffffff";
  background-image: none;
  margin: 0 auto;
  max-width: 80%;
  

  h1 {
    color: ${defaultColors.cyberBlue};
    font-family: 'MontserratBold', sans-serif;
    font-size:21px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h2 {
    color: ${defaultColors.cyberBlue};
    font-family: 'MontserratBold', sans-serif;
    font-size:18px;
    margin-bottom: 20px;
    margin-top: 20px;
    text-transform: uppercase;
    line-height: 1;
  }

  h3 {
    color: ${defaultColors.cyberBlue};
    font-family: 'MontserratBold', sans-serif;
    font-size:16px;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
    line-height: 1;
  }

  h4 {
    color: ${defaultColors.cyberBlue};
    font-family: 'Montserrat', sans-serif;
    font-size:15px;
    font-weight: 700;
    margin-bottom:20px;
    text-transform: uppercase;
    line-height: 1;
  }

  h5 {
    color: ${defaultColors.cyberBlue};
    font-family: 'Montserrat', sans-serif;
    font-size:15px;
    text-transform: uppercase;
    line-height: 1;
  }

  h6 {
    color: ${defaultColors.cyberBlue};
    font-family: 'Montserrat', sans-serif;
    font-size:15px;
    text-transform: uppercase;
    line-height: 1;
  }

  p {
    color: ${defaultColors.cyberBlue};
    font-family: 'Montserrat', sans-serif;
    font-size:14px;
    line-height:18px;
    margin-bottom:10px;
  }

  a:link, a:visited {
    color: ${defaultColors.orange};
    font-family: 'Montserrat', sans-serif;
    font-size:14px;
    text-decoration: none;
  }

  a:hover {
    color: ${defaultColors.cyberBlue};
  }

  /* Min width of 576 */
  ${media.landscapePhones `
    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 20px;
    }

    h4 {
      font-size: 18px;
    }

    h5 {
      font-size: 18px;
    }

    h6 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }

    a:link, a:visited {
      font-size: 14px;
    }
  `}

  /* Min width of 768 */
  ${media.tablet `
    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 22px;
    }

    h4 {
      font-size: 20px;
    }

    h5 {
      font-size: 20px;
    }

    h6 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }

    a:link, a:visited {
      font-size: 16px;
    }
  `}

  /* Min width of 1024 */
  ${media.desktop `
    h1 {
      font-size: 35px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 30px;
    }

    h4 {
      font-size: 28px;
    }

    h5 {
      font-size: 26px;
    }

    h6 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }

    a:link, a:visited {
      font-size: 16px;
    }
  `}

  /* Min width of 1200 */
  ${media.widescreen `
    p {
      font-size: 18px;
      line-height:22px;
    }

    a:link, a:visited {
      font-size: 18px;
    }
  `}

  /* Min width of 1980 */
  ${media.udh `
    p {}
    a:link, a:visited {}
  `}

  body {
    background-color: #ffffff !important;
  }

  @page {
    size: auto;   /* auto is the initial value */
    margin-top: 5mm;  /* this affects the margin in the printer settings */
    margin-bottom: 5mm; 
  }

  min-width: 100%;

  h1, h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
  }

  p, a:link {
    font-family: 'Lato';
  }

  h1 {
    margin: 0px;
    text-transform: uppercase;
  }

  h2 {
    color: rgb(0, 171, 223);
    font-family: "Roboto Condensed", sans-serif;
    margin-bottom: 20px;
  }

  p {
    color: #000000;
  }

  .contacts, .profile, .workExp, .skills, .education {
    padding: 20px;
  }

  .controls {
    background-color: #000000;
    display: grid;
    grid-template-columns: 75% 100px;
    justify-content: space-between;
    padding: 5.5em 1em 1em 1em;
    
    p {
      color: #ffffff;
      font-family: 'Montserrat';
      margin-bottom: 0px;
    }

    a {
      font-weight: bold;
    }
  }

  .contacts {
    border-bottom: 5px solid ${defaultColors.cyberBlue};
    position: relative;

    h2 {
      color: #000000;
      margin: 5px 0px;
      padding-bottom: 5px;
      border-bottom: 1px solid ${defaultColors.cyberBlue};
      border-top: 1px solid ${defaultColors.cyberBlue};
      width: fit-content;
      padding-top: 7px;
    }

    p, a:link { 
      text-transform: uppercase;
    }

    p {
      color: #000000;
      font-weight: 700;
      line-height: 1;
    }

    a:link {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 400;
    }
  }

  .contacts * {
    position: relative;
  }

  .contacts::before {    
    content: "";
    background-image: url(${bg});
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }

  .profile {
    border-bottom: 1px solid ${defaultColors.cyberBlue};
    padding-bottom: 15px;
  }

  .workExp {
    border-bottom: 1px solid ${defaultColors.cyberBlue};

    .workplace {
      margin-bottom: 20px;

      h3 {
        font-family: "Roboto Condensed", sans-serif;
        margin-bottom: 0.5rem;
      }

      .workplaceHeader {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;

        h4 {
          color: #000000;
          font-family: "Roboto Condensed", sans-serif;
          margin-bottom: 0px;
        }
        p {
          font-family: "Roboto Condensed", sans-serif;
          font-weight: 700;
          margin-bottom: 0px;
          text-transform: uppercase;
          text-align: right;
        }
      }

      p.keywords {
        font-size: 0.8rem;
        font-style: italic;
        line-height: 1rem;
        margin-bottom: 1rem;

        span {
          font-weight: 700;
        }
      }
    }
  }

  .skills {
    border-bottom: 1px solid ${defaultColors.cyberBlue};

    .skillsWrap {
      column-gap: 20px;

      section {
        margin-top: 20px;
      
        h3 {
          font-family: "Roboto Condensed", sans-serif;
        }
      }
    }
  }

  .education {
    border-bottom: 1px solid ${defaultColors.cyberBlue};
    
    .edItem {
      h3 {
        font-family: "Roboto Condensed", sans-serif;
        margin-bottom: 0.5rem;
      }

      .edHeader {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;

        h4 {
          color: #000000;
          font-family: "Roboto Condensed", sans-serif;
          margin-bottom: 0px;
        }

        p {
          font-family: "Roboto Condensed", sans-serif;
          font-weight: 700;
          margin-bottom: 0px;
          text-transform: uppercase;
          text-align: right;
        }
      }
    }
  }

  /* Min width of 1024 */
    ${media.desktop `
    `}

  @media print {
    #Header, #Footer, header, .header { 
      display: none !important; 
    }
    .contacts, .profile, .workExp, .skills, .education {
      padding: 0px 0px 20px 0px;
    }

    .controls {
      display:none;
    }
  }

  #Header, #Footer, header, .header { 
    display: none !important; 
  }
`

export default StyledResume
