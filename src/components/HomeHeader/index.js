import { View, Text } from 'react-native'
import React from 'react'
import { Header, NameText, UserContainer, UserImage, UserInfoContainer, WelcomeText } from './style'

export default function HomeHeader() {
  return (
    <Header
        colors={['#60BFC5', '#496BBA']}
        start={{x: -0.05, y: 1.08}}
        end={{x: 1, y: 0}}
    >
        <UserContainer>
            <UserImage 
                source={require('../../assets/doctor-image.png')}
            />
            <UserInfoContainer>
                <WelcomeText>Bem vindo</WelcomeText>
                <NameText>Dr. Claudio</NameText>
            </UserInfoContainer>
        </UserContainer>
    </Header>
  )
}