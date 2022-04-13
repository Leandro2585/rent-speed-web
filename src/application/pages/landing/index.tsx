import React from 'react'
import { ContainerPage, Content, Logo, Title, Subtitle, SubmitButton, HeroSection } from './style'

export const Landing: React.FC = () => {
  return (
    <ContainerPage>
      <Content>
        <Logo src='../../../public/svgs/logo.svg'/>
        <Title>Alugue um<br/> carro de maneira simples e fácil</Title>
        <Subtitle>Vários modelos para você dirigir seguro, com conforto e segurança.</Subtitle>
        <SubmitButton >Começar agora</SubmitButton>
      </Content>
      <HeroSection>
        <img src='../../../public/images/audi.png' alt='Audi' />
      </HeroSection>
    </ContainerPage>
  )
}