// Library Imports
import styled from 'styled-components'
import media from 'globalConfig/mobile'

// Variable Imports
import { defaultColors } from 'globalConfig/colors'

const StyledSidebarLayout = styled.section`
/* MOBILE FIRST DEFAULT STYLES */
  

  #sidebarWrap {
    grid-area: sidebar;
  }

  #contentWrap {
    grid-area: content;
  }

  border: 1px solid ${defaultColors.cyberBlue};
  border-top: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
  "sidebar content content content";
  max-width: 100%;
  padding: 20px 24px;


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
    
  `}

/* Min width of 1024 */
  ${media.desktop `
    
  `}

/* Min width of 1200 */
  ${media.widescreen `
    
  `}

/* Min width of 1980 */
  ${media.udh `
    
  `}
`

export default StyledSidebarLayout
