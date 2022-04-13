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
      buttonText: `#FFFFFF`,
      shape: `#EBEBF0`,
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