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
                inputText="Descrição da consulta"
                textArea="O paciente possuí uma infecção no ouvido. Necessário repouse de 2 dias e acompanhamento médico constante"
            />
            <InternalTextArea 
                inputText="Descrição da consulta"
                textArea="Infecção no ouvido"
            />
            <InternalTextArea 
                inputText="Prescrição médica"
                textArea="Medicamento: Advil
                            Dosagem: 50 mg
                            Frequência: 3 vezes ao dia
                            Duração: 3 dias"
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
          <UnsignedLink 
              linkText='Cancelar' 
          />
      </Container>
    </>
  )
}