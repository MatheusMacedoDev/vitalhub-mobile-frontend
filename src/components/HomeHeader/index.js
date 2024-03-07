import React from 'react';
import { Header, NameText, UserContainer, UserImage, UserInfoContainer, WelcomeText } from './style';
import { Ionicons } from '@expo/vector-icons';

export default function HomeHeader({ userName, userImageUri, navigation}) {
  return (
    <Header
        colors={['#60BFC5', '#496BBA']}
        start={{x: -0.05, y: 1.08}}
        end={{x: 1, y: 0}}
    >
        <UserContainer onPress={() => navigation.navigate('PatientProfile')}>
            <UserImage 
                source={{ uri: userImageUri }}
            />
            <UserInfoContainer>
                <WelcomeText>Bem vindo</WelcomeText>
                <NameText>{ userName }</NameText>
            </UserInfoContainer>
        </UserContainer>
        <Ionicons name="notifications" size={28} color="#fff" />
    </Header>
  )
}