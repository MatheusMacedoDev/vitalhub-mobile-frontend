import React from 'react'
import { Container } from '../../components/Container/style'
import Logo from '../../components/Logo'
import { Title } from '../../components/Title/style'
import BasicInput from '../../components/BasicInput'
import { BasicInputWrapper } from '../../components/BasicInput/style'

export default function LoginScreen() {
  return (
    <Container>
      <Logo />
      <Title>
        Entrar ou criar conta
      </Title>
      <BasicInputWrapper>
        <BasicInput 
          placeholderText='Usuário ou E-mail'
        />
        <BasicInput
          placeholderText='Senha'
        />
      </BasicInputWrapper>
    </Container>
  )
}