// Library Imports
import styled from 'styled-components'
import media from 'globalConfig/mobile'

// Asset Imports
import karlSlider from './assets/karlSlider.jpg'

const StyledHeroImage = styled.section`
  /* MOBILE FIRST DEFAULT STYLES */

  background-image: url(${karlSlider});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-box-shadow: 0px 7px 5px -1px rgba(0,171,223,0.3); 
  box-shadow: 0px 7px 5px -1px rgba(0,171,223,0.3);
  display: flex;
  height: 300px;
  margin: 0 auto;
  width: 100%;

  div {
    align-self: center;
    margin: 0 auto;
    width: 95%;

    h1 {
      color: #00abdf;
      display: block;
      text-transform: uppercase;
    }
    p {
      color: #fff;
    }
  }

  /* Min width of 375 */
  ${media.iphoneSe `
    div {
      max-width: 90%;
      margin: 0px auto;
    }
  `}

  /* Min width of 414 */
  ${media.iphoneXr `
    div {
      max-width: 65%;
      margin: 0px 0px 0px 20px;
    }
  `}

  /* Min width of 576 */
  ${media.landscapePhones `
    div {
      min-width: 50%;
      max-width: 55%;
      margin: 0px 0px 0px 20px;
    }
  `}

  /* Min width of 768 */
  ${media.tablet `
    background-position: middle;
    height: 400px;

    div {
      width: 50%;
    }
  `}

/* Min width of 1024 */
  ${media.desktop `
    height: 480px;

    div {
      width: 55%;
    }
  `}

/* Min width of 1200 */
  ${media.widescreen `
    height: 600px;
  `}
`

export default StyledHeroImage
