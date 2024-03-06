import React, { useEffect } from 'react'
import { Container } from '../../components/Container/style'
import Logo from '../../components/Logo'
import { Title } from '../../components/Title/style'
import { BasicInput, BasicInputWrapper } from '../../components/BasicInput/style'
import UnsignedLink from '../../components/UnsignedLink'
import UnsignedButton from '../../components/UnsignedButton'
import { UnsignedButtonsWrapper } from '../../components/UnsignedButton/style'

export default function LoginScreen({ navigation }) {

  async function login() {
    navigation.replace('Main');
  }

  function forgotPassword() {
    navigation.navigate('recoverPassword');
  }

  function createAccount() {
    navigation.navigate('createAccount');
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
        handleClickFn={forgotPassword}
      />
      <UnsignedButtonsWrapper>
        <UnsignedButton
          buttonText='Entrar'
          handleClickFn={login}
        />
        <UnsignedButton 
          buttonText='Entrar com o Google'
          isGoogleButton={true}
        />
      </UnsignedButtonsWrapper>
      <UnsignedLink 
        additionalText='Não tem conta?'
        linkText='Crie uma conta agora!'
        handleClickFn={createAccount}
      />
    </Container>
  )
}