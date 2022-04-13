import { globalCss } from '.';

export const globalStyles = globalCss({
  '@font-face': [{
    fontFamily: 'Archivo',
    fontWeight: 'bold',
    src: "url('../assets/fonts/archivo/Archivo-Regular.ttf') format('truetype')"
  }],

  '*': {
    // backgroundImage: "url('../../../public/images/audi.png')",
    fontSize: 128,
    fontFamily: 'Sans Serif'
  }
})