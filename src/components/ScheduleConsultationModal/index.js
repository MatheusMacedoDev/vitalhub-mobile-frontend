import { View, Text } from 'react-native'
import React from 'react'
import BottomModal from '../BottomModal'
import { Title } from '../Title/style'
import UnsignedButton from '../UnsignedButton'
import { ButtonText } from '../UnsignedButton/style'
import UnsignedLink from '../UnsignedLink'

export default function ScheduleConsultationModal({ active = true, disableModalFn = null }) {
  return (
    <BottomModal active={active} modalHeightPercentage={80}>
        <Title>Agendar consulta</Title>

        <UnsignedButton 
            buttonText='Continuar'
        />
        <UnsignedLink
            linkText='Cancelar'
            handleClickFn={disableModalFn}
        />
    </BottomModal>
  )
}