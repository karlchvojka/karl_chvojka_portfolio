// Library Imports
import styled from 'styled-components'
import media from 'globalConfig/mobile'

// Types Declarations
interface StyledAccordionItemProps {
  rotation: string
}
// Variable Imports
import { defaultColors } from 'globalConfig/colors'

const StyledAccordionItem = styled.section<StyledAccordionItemProps>`
  /* MOBILE FIRST DEFAULT STYLES */

  .accordion_item_title button {
    align-items: center;
    background-color: ${defaultColors.darkBlue};
    border: none;
    cursor: pointer;
    display:grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    width: 100%;

    div {
      height: auto;
    }

    h3 {
      color: ${defaultColors.orange};
      margin-bottom: 0px;
    }

    img {
      transform: rotate(${props => props.rotation});
    }
  }

  .accordion_item_title button:hover {
    h3 {
      color: ${defaultColors.cyberBlue};
    }
  }

  .accordion_item_content {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
    max-height: 1000px;
    overflow: hidden;
    padding: 0px 55px 0px 40px;
    transition: max-height 1s ease-in-out;
    

    .skillItem {
      h4 {
        font-size: 14px;
        font-family: 'MontserratBold';
        margin-bottom: 4px;
      }

      .progressWrap {
        background-color: ${defaultColors.darkBlue};
        border: 1px solid ${defaultColors.darkBlue};
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 4px 0px #69D9FF; 
        box-shadow: 0px 0px 4px 0px #69D9FF;
        margin-bottom: 10px;
        width: 100%;

        .progressInner {
          align-content: center;
          background-color: ${defaultColors.cyberBlue};
          border-radius: 5px;
          display:grid;
          height: 20px;

          p {
            color: ${defaultColors.darkBlue};
            font-family: 'MontserratBold';
            font-size: 14px;
            font-weight: 700;
            padding-right: 5px;
            text-align: end;
            margin: 0px;
          }
        }
      }
    }
  }

  .accordion_item_content[aria-expanded="false"] {
    max-height: 0px;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  }
  
  /* Min width of 576 */
    ${media.landscapePhones `
      .accordion_item_content {

        .skillItem {
          h4 {
            font-size: 20px;
          }
        }
      }
    `}

  /* Min width of 768 */
    ${media.tablet `
      .accordion_item_content {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 100px;

        .skillItem {
          h4 {
            font-size: 20px;
          }
        }
      }
    `}

  /* Min width of 1024 */
    ${media.desktop `
      .accordion_item_content {
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 80px;

        .skillItem {
          h4 {
            font-size: 24px;
          }
        }
      }
    `}

  /* Min width of 1200 */
    ${media.widescreen `
      .accordion_item_content {
        grid-column-gap: 130px;
      }
    `}
`

export default StyledAccordionItem
