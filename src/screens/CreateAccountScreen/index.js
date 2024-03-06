import React from 'react'
import { Container } from '../../components/Container/style'
import Logo from '../../components/Logo'
import { Title } from '../../components/Title/style'
import { CommandText } from '../../components/CommandText/style'
import { BasicInput, BasicInputWrapper } from '../../components/BasicInput/style'
import UnsignedButton from '../../components/UnsignedButton'
import { UnsignedButtonsWrapper } from '../../components/UnsignedButton/style'
import UnsignedLink from '../../components/UnsignedLink'

export default function CreateAccountScreen({ navigation }) {
    function returnToLogin() {
        navigation.navigate('login');
    }

  return (
    <Container>
        <Logo />
        <Title>
            Criar conta
        </Title>
        <CommandText>
            Insira seu endereço de e-mail e senha para realizar seu cadastro.
        </CommandText>
        <BasicInputWrapper>
            <BasicInput 
                placeholder='Usuário ou E-mail'
            />
            <BasicInput 
                placeholder='Senha'
                secureTextEntry
            />
            <BasicInput 
                placeholder='Confirmar Senha'
                secureTextEntry
            />
        </BasicInputWrapper>
        <UnsignedButtonsWrapper>
            <UnsignedButton 
                buttonText='Cadastrar'
                handleClickFn={returnToLogin}
            />
        </UnsignedButtonsWrapper>
        <UnsignedLink 
            linkText='Cancelar'
            handleClickFn={returnToLogin}
        />
    </Container>
  )
}