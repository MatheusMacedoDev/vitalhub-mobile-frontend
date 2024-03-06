import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '../../components/Container/style'
import Logo from '../../components/Logo'
import { Title } from '../../components/Title/style'
import { CommandText } from '../../components/CommandText/style'
import { BasicInput, BasicInputWrapper } from '../../components/BasicInput/style'
import { UnsignedButtonsWrapper } from '../../components/UnsignedButton/style'
import UnsignedButton from '../../components/UnsignedButton'

export default function RedefinePasswordScreen({ navigation }) {
    function returnToLogin() {
        navigation.navigate('login');
    }

  return (
    <Container>
        <Logo />
        <Title>
            Redefinir senha
        </Title>
        <CommandText>
            Insira e confirme a sua nova senha.
        </CommandText>
        <BasicInputWrapper>
            <BasicInput 
                placeholder='Nova Senha'
                secureTextEntry
            />
            <BasicInput 
                placeholder='Confirmar Nova Senha'
                secureTextEntry
            />
        </BasicInputWrapper>
        <UnsignedButtonsWrapper>
            <UnsignedButton 
                buttonText='Confirmar nova senha'
                handleClickFn={returnToLogin}
            />
        </UnsignedButtonsWrapper>
    </Container>
  )
}