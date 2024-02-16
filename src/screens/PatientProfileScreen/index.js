import React from 'react'
import UserMainInfo from '../../components/UserMainInfo'
import { UserProfileImage } from '../../components/UserImage/style'
import { Container } from '../../components/Container/style'
import { InternalInputsWrapper } from '../../components/InternalInput/style'
import InternalTextArea from '../../components/InternalTextArea'
import UnsignedButton from '../../components/UnsignedButton'
import UnsignedLink from '../../components/UnsignedLink'
import { UnsignedButtonsWrapper } from '../../components/UnsignedButton/style'

export default function PatientProfileScreen() {
  return (
    <>
      <UserProfileImage 
          resizeMode="cover"
          source={require('../../assets/user-profile-image.png')} 
      />
      <Container>
          <UserMainInfo 
              username='Richard Kosta'
              infoArr={[ 
                  'richard.kosta@gmail.com'
              ]}
          />
          <InternalInputsWrapper>
            <InternalTextArea 
                inputText="Data de nascimento:"
                textArea="04/05/1999"
            />
            <InternalTextArea 
                inputText="CPF"
                textArea="859********"
            />
            <InternalTextArea 
                inputText="Endereço"
                textArea="Rua Vicenso Silva, 987"
            />
            <InternalTextArea 
                inputText="Cep"
                textArea="06548-909"
            />
            <InternalTextArea 
                inputText="Cidade"
                textArea="Moema-SP"
            />
          </InternalInputsWrapper>
          <UnsignedButtonsWrapper>
              <UnsignedButton 
                  buttonText='Salvar'
              />
              <UnsignedButton 
                  buttonText='Editar'
              />
          </UnsignedButtonsWrapper>
      </Container>
    </>
  )
}