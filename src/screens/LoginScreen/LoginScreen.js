import React from 'react'
import { Container } from '../../components/Container/style'
import Logo from '../../components/Logo'
import { Title } from '../../components/Title/style'
import { BasicInput, BasicInputWrapper } from '../../components/BasicInput/style'
import UnsignedLink from '../../components/UnsignedLink'

export default function LoginScreen() {
  return (
    <Container>
      <Logo />
      <Title>
        Entrar ou criar conta
      </Title>
      <BasicInputWrapper>
        <BasicInput 
          placeholder='Usuário ou E-mail'
        />
        <BasicInput
          placeholder='Senha'
          secureTextEntry
        />
      </BasicInputWrapper>
      <UnsignedLink 
        linkText='Esqueceu sua senha?'
      />
      <UnsignedLink 
        additionalText='Não tem conta?'
        linkText='Crie uma conta agora!'
      />
    </Container>
  )
}