// Library Imports
import media from 'globalConfig/mobile'
import styled from 'styled-components'

const StyledSkills = styled.section`
  padding: 20px;
  /* MOBILE FIRST DEFAULT STYLES */
    margin:0 auto;
    
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
      max-width: 90%;
    `}
  
  /* Min width of 1200 */
    ${media.widescreen `
      max-width: 80%;
      
    `}
  
  /* Min width of 1980 */
    ${media.udh `
      
    `}
  
  `

export default StyledSkills
