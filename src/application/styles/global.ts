import { globalCss } from '.'
import '@application/styles/fonts.css'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    fontFamily: '$default',
    boxSizing: 'border-box'
  },
  'button': {
    border: 'none'
  }
})

globalStyles()