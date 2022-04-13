import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText, globalCss, prefix, css } = createStitches({
  theme: {
    colors: {
      primary: `#DC1637`,
      primaryHover: `#FDEDEF`,
      primaryLIight: `#DC1637 `,
      primaryDark: `#B2122C`,
      secondary: `#03B252`,
      secondaryDark: `#038A3F`,
      backgroundPrimary: `#FFFFFF`,
      backgroundSecondary: `#1B1B1F`,
      backgroundSecondaryHover: `#000000`,
      title: `#47474D`,
      text: `#7A7A80`,
      details: `#AEAEB3`,
      heroTitle: `#FFFFFF`,
      buttonText: `#FFFFFF`,
      shape: `#EBEBF0`,
      buttonTextHover: `#DDD`
    },
    sizes: {
      '100vw': '100vw',
      '100vh': '100vh',
      '50p': `50%`,
      '80': `5rem`,
      '292': `18.25rem`,
      '332': `20.75rem`,
      '416': `26rem`,
      '500': `31.25rem`,
      '540': `33.75rem`,
      '616': `38.5.rem`
    },
    lineHeights: {
      '30': `1.875rem`,
      '54': `3.375rem`
    },
    space: {
      '0': `0px`,
      '1': `1px`,
      '4': `0.25rem`,
      '8': `0.5rem`,
      '12': `0.75rem`,
      '16': `1rem`,
      '24': `1.5rem`,
      '32': `2rem`,
      '64': `4rem`, 
      '120': `7.5rem`,
      '140': `8.75`,
      '160': `10rem`,
      '226': `14.125rem`,
      '264': `16.5rem`
    },
    radii: {
      full: `99999px`,
      default: `5px`,
    },
    fonts: {
      default: `Inter_Regular`,
      inter500: `Inter_Medium`,
      inter600: `Inter_Bold`,
      archivo500: `Archivo_Medium`,
      archivo600: `Archivo_Bold`
    },
    fontSizes: {
      '18': `1.125rem`,
      '20': `1.25rem`,
      '54': `3.375rem`,
    }
  },
  utils: {
    paddingX: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});