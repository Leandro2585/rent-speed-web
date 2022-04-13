import { styled } from "@application/styles"

export const ContainerPage = styled('div', {
  width: '$100vw',
  height: '$100vh',
  paddingRight: '$264',
  paddingLeft: '$264',
  backgroundColor: '$backgroundSecondary',
  display: 'flex',
  flexDirection: 'row'
})

export const Content = styled('div', {
  width: '$50p',
  height: '$540',
  margin: 'auto 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
})

export const Logo = styled('img', {})

export const Title = styled('h1', {
  color: '$heroTitle',
  fontSize: '$54',
  fontFamily: '$archivo600',
  lineHeight: '$54',
  maxWidth: '$416',
  marginTop: '$120'
})

export const Subtitle = styled('p', {
  color: '$heroTitle',
  marginTop: '$32',
  fontSize: '$20',
  fontFamily: '$default',
  maxWidth: '$332',
  lineHeight: '$30'
})

export const SubmitButton = styled('button', {
  marginTop: '$64',
  width: '$292',
  height: '$80',
  fontFamily: '$inter500',
  fontSize: '$18',
  transition: 'background-color 0.2s, color 0.2s',
  defaultVariants: {
    colors: 'default'
  },
  variants: {
    colors: {
      default: {
        backgroundColor: '$primary',
        color: '$buttonText',
        '&:hover': {
          backgroundColor: '$primaryDark',
          color: '$buttonTextHover'
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$buttonText',
        '&:hover': {
          backgroundColor: '$secondaryDark',
          color: '$buttonTextHover'
        },
      }
    }
  }
})

export const HeroSection = styled('div', {
  width: '50p',
  height: '65vh',
  display: 'flex',
  alignItems: 'center',
  margin: 'auto 0',
  backgroundImage: 'url("../../../public/images/background.png")',
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: '3.5rem'
})