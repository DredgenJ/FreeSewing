const colors = require('tailwindcss/colors')

const blue = '#77cbf9'
const pink = '#ecadb9'

module.exports = {
  'fontFamily': '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

  'base-100': colors.neutral['50'],
  'base-200': colors.neutral['200'],
  'base-300': colors.neutral['400'],
  'base-content': colors.neutral['700'],

  'primary': pink,
  'primary-focus': blue,
  'primary-content': colors.neutral['900'],
  'secondary': colors.sky['500'],
  'secondary-focus': pink,
  'secondary-content': colors.neutral['900'],

  'accent': colors.neutral['700'],
  'accent-focus': colors.neutral['900'],
  'accent-content': blue,

  'neutral': colors.neutral['900'],
  'neutral-focus': colors.neutral['700'],
  'neutral-content': colors.sky['100'],

  'info': colors.pink['400'],
  'success': colors.green['600'],
  'warning': colors.amber['500'],
  'error': colors.red['600'],

  '--theme-gradient': `repeating-linear-gradient(
    90deg,
    #77cbf9,
    #77cbf9 20%,
    #ecadb9 20%,
    #ecadb9 40%,
    ${colors.neutral['50']} 40%,
    ${colors.neutral['50']} 60%,
    #ecadb9 60%,
    #ecadb9 80%,
    #77cbf9 80%,
    #77cbf9 100%
  )`,

  '--code-background-color': colors.neutral['800'],
  '--code-border-color': colors.neutral['900'],
  '--code-color': colors.neutral['100'],
  '--code-font-family': `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
  '--code-border-radius': '0.5rem',
  '--code-border-style': 'solid',
  '--code-border-width': 1,
  '--code-outer-padding': '0 0.5rem',
  '--code-inner-padding': '1rem',

  '--code-color-keyword': colors.pink['400'],
  '--code-font-weight-keyword': 'bold',
  '--code-color-entity': colors.violet['400'],
  '--code-font-weight-entity': 'bold',
  '--code-color-constant': colors.lime['400'],
  '--code-color-string': colors.sky['400'],
  '--code-font-style-string': 'italic',
  '--code-color-variable': colors.indigo['400'],
  '--code-color-comment': colors.neutral['400'],
  '--code-color-tag': colors.green['400'],
  '--code-color-property': 'inherit',
  '--code-font-weight-property': 'bold',

  '--pattern-bg': colors.neutral['50'],
  '--pattern-fabric': colors.neutral['700'],
  '--pattern-lining': colors.emerald['500'],
  '--pattern-interfacing': colors.neutral['400'],
  '--pattern-canvas': colors.amber['600'],
  '--pattern-various': colors.red['500'],
  '--pattern-mark': colors.blue['500'],
  '--pattern-contrast': colors.pink['500'],
  '--pattern-note': colors.violet['500'],

  '--pattern-dev-0': colors.red['500'],
  '--pattern-dev-1': colors.green['500'],
  '--pattern-dev-2': colors.blue['500'],
  '--pattern-dev-3': colors.yellow['500'],
  '--pattern-dev-4': colors.pink['500'],
  '--pattern-dev-5': colors.violet['500'],
  '--pattern-dev-6': colors.teal['500'],
  '--pattern-dev-7': colors.neutral['500'],

  '--pattern-text-xs': '0.2rem',
  '--pattern-text-sm': '0.3rem',
  '--pattern-text': '0.4rem',
  '--pattern-text-lg': '0.6rem',
  '--pattern-text-xl': '0.8rem',
  '--pattern-text-2xl': '1.5rem',
  '--pattern-text-3xl': '2rem',
  '--pattern-text-4xl': '3rem',

  '--pattern-scale': '1',
  '--pattern-stroke-xs': "0.2px",
  '--pattern-stroke-sm': "0.4px",
  '--pattern-stroke': "0.7px",
  '--pattern-stroke-lg': "1.3px",
  '--pattern-stroke-xl': "2px",
  '--pattern-stroke-2xl': "4px",
  '--pattern-stroke-3xl': "6px",
  '--pattern-stroke-4xl': "8px",
}
