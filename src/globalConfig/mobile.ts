// Library Imports
import { css, CSSObject } from 'styled-components'

// Types declarations
type Sizes = {
  [key: string]: number;
}

// Variable Declarations
const sizes: Sizes = {
  udh: 1980,
  widescreen: 1200,
  desktop: 1024,
  tablet: 768,
  landscapePhones: 576,
  iphoneXr: 414,
  iphoneSe: 375,
}

type Media = {
  [key in keyof Sizes]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: any[]
  ) => ReturnType<typeof css>
};

/**
 * This function allows us to define the size needed dynamically.
 */
const media: Media = Object.keys(sizes).reduce(( acc, label ) => {
  acc[label] = (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: any[]
  ) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(first, ...interpolations)}
    }
  `
  return acc
}, 

{} as Media)

export default media