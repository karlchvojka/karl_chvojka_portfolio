// Library Imports
import styled from 'styled-components'

// Variable Imports
import { defaultColors } from 'globalConfig/colors'

const StyledCornerWrap = styled.section`
  background-color: ${defaultColors.cyberBlue};
  clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px);
  margin-bottom: 5px;
  padding-bottom: 4px;
  position: relative;

  .cornerWrapInner {
    background-color: ${defaultColors.darkBlue};
    clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px);
    height: calc(100% - 32px);
    position: relative;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    width: calc(100% - 40px);
    padding: 18px 18px 14px 18px;
  }
`

export default StyledCornerWrap
