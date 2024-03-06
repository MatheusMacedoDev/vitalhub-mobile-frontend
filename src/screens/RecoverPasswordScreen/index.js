import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '../../components/Container/style'
import Logo from '../../components/Logo'
import { Title } from '../../components/Title/style'
import { BasicInput, BasicInputWrapper } from '../../components/BasicInput/style'
import { UnsignedButtonsWrapper } from '../../components/UnsignedButton/style'
import UnsignedButton from '../../components/UnsignedButton'
import { CommandText } from '../../components/CommandText/style'

export default function RecoverPasswordScreen({ navigation }) {
    function passToEmailCode() {
        navigation.navigate('emailCode');
    }

  return (
    <Container>
        <Logo />
        <Title>
            Recuperar senha
        </Title>
        <CommandText>
            Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha.
        </CommandText>
        <BasicInputWrapper>
            <BasicInput 
                placeholder='Usuário ou E-mail'
            />
        </BasicInputWrapper>
        <UnsignedButtonsWrapper>
            <UnsignedButton 
                buttonText='Continuar'
                handleClickFn={passToEmailCode}
            />
        </UnsignedButtonsWrapper>
    </Container>
  )
}