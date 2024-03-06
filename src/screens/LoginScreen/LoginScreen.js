import React from 'react'
import { Container } from '../../components/Container/style'
import Logo from '../../components/Logo'
import { Title } from '../../components/Title/style'
import { BasicInput, BasicInputWrapper } from '../../components/BasicInput/style'
import UnsignedLink from '../../components/UnsignedLink'
import UnsignedButton from '../../components/UnsignedButton'
import { UnsignedButtonsWrapper } from '../../components/UnsignedButton/style'

export default function LoginScreen({ navigation }) {

  async function Login() {
    navigation.replace('Main');
  }

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
        isGreyLink={true}
      />
      <UnsignedButtonsWrapper>
        <UnsignedButton
          buttonText='Entrar'
          handleClickFn={Login}
        />
        <UnsignedButton 
          buttonText='Entrar com o Google'
          isGoogleButton={true}
        />
      </UnsignedButtonsWrapper>
      <UnsignedLink 
        additionalText='Não tem conta?'
        linkText='Crie uma conta agora!'
      />
    </Container>
  )
}