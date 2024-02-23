import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '../../components/Container/style'
import { Title } from '../../components/Title/style'
import { ButtonLinkWrapper } from '../ClinicSelectionScreen/style'
import UnsignedButton from '../../components/UnsignedButton'
import UnsignedLink from '../../components/UnsignedLink'

export default function DoctorSelectionScreen() {
  return (
    <Container>
      <Title>Selecionar médico</Title>

      <ButtonLinkWrapper>
        <UnsignedButton 
          buttonText='Continuar'
        />
        <UnsignedLink 
          linkText='Cancelar'
        />
      </ButtonLinkWrapper>
    </Container>
  )
}