// Framework Imports
import React from 'react'

// Asset Imports
import arrow from 'globalAssets/images/arrow.png'

// CSS Imports
import StyledAccordionItem from './StyledAccordionItem'

// Types Declarations
import { skillItem } from 'src/types/data.interface'

interface AccordionItemProps {
  title: string,
  def: boolean,
  skillList: Array<skillItem>
}

/**
 * This the AccordionItem component.
 */
const AccordionItem = ({ title, def, skillList }: AccordionItemProps) => {
  // State Declarations
  const [isActive, setIsActive] = React.useState(def ? true : false)
  const [transitionExit, setTransitionExit] = React.useState(false);

  const handleExit = () => {
    setTransitionExit(true);
    setTimeout(() => {
      setIsActive(false);
      setTransitionExit(false);
      // timeout should be less than animation time otherwise state might still be true
      // after animation ends and drawer appears for few milliseconds
    }, 450);
  };

  return (
    <StyledAccordionItem rotation={isActive ? 'none' : '180deg'}>
      <section
        className="accordion_item_title"
      >
        <button data-testid="accordionItemTitle"  onClick={() => setIsActive(!isActive)}>
          <div><h3 data-testid='accordionItemTitleText'>{title}</h3></div>
          <div><img src={arrow} /></div>
        </button>
      </section>
      {
        <section 
          data-testid='accordionItemContent'
          className={`accordion_item_content ${isActive ? 'expanded' : 'collapsed'}`}
          aria-expanded={isActive}
        >
          { 
            skillList.map(( skill, index ) => (
              <section className='skillItem' key={skill.title + index}>
                <h4 data-testid='skillSectionTitle'>{skill.title}</h4>
                <section className="progressWrap">
                  <section className="progressInner" style={{width: `${skill.perc}`}}><p data-testid='progressBarText'>{skill.perc}</p></section>
                </section>
              </section>
            ))
          }
        </section>
      }
    </StyledAccordionItem>
  )
}

export default AccordionItem
