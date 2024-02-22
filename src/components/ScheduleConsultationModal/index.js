import { View, Text } from 'react-native'
import React, { useState } from 'react'
import BottomModal from '../BottomModal'
import { Title } from '../Title/style'
import UnsignedButton from '../UnsignedButton'
import { ButtonText } from '../UnsignedButton/style'
import UnsignedLink from '../UnsignedLink'
import SelectInput from '../SelectInput'

export default function ScheduleConsultationModal({ active = true, disableModalFn = null }) {
  const [consultationType, setConsultationType] = useState('');

  return (
    <BottomModal active={active} modalHeightPercentage={80}>
        <Title>Agendar consulta</Title>

        <SelectInput  
          labelText='Informe o tipo de consulta'
          defaultText='Tipo de consulta'
          handleSelectedFn={setConsultationType}
        />

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