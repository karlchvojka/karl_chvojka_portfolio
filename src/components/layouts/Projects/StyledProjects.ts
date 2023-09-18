// Library Imports
import styled from 'styled-components'
import media from 'globalConfig/mobile'

// Variable Imports
import { defaultColors } from 'globalConfig/colors'

const StyledProjects = styled.section`
  /* MOBILE FIRST DEFAULT STYLES */
  
  margin:0 auto;
  padding: 20px;

  h2 {
    color: ${defaultColors.orange};
    margin: 0;
  }
  
  .titleWrap {
    margin-bottom: 20px;
  }

  .projectsWrap {
    column-gap: 20px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }

    h3 {
      margin-bottom: 10px;
    }

    h4 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }

  /* Min width of 768 */
    ${media.tablet `
      .projectsWrap {
        grid-template-columns: 1fr 1fr;
      }
    `}

  /* Min width of 1024 */
    ${media.desktop `
      max-width: 90%;
      
      .projectsWrap {
        grid-template-columns: 1fr 1fr;
        h3 {
          font-size: 30px;
        }

        h4 {
          font-size: 28px;
        }
      }
    `}

  /* Min width of 1200 */
    ${media.widescreen `
      max-width: 80%;

      .projectsWrap {
        grid-template-columns: 1fr 1fr 1fr;

        h3 {
          font-size: 28px;
        }

        h4 {
          font-size: 26px;
        }
      }
    `}
`

export default StyledProjects
