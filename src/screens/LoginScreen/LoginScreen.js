import React from 'react'
import { Container } from '../../components/Container/style'
import Logo from '../../components/Logo'
import { Title } from '../../components/Title/style'

export default function LoginScreen() {
  return (
    <Container>
      <Logo />
      <Title>
        Entrar ou criar conta
      </Title>
    </Container>
  )
}