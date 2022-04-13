import { globalCss } from '.'
import '@application/styles/fonts.css'

const globalStyles = globalCss({
  '*': {
    fontFamily: '$default'
  }
})

globalStyles()