import { View, Text } from 'react-native'
import React, { useState } from 'react'
import BottomModal from '../BottomModal'
import { Title } from '../Title/style'
import UnsignedButton from '../UnsignedButton'
import { ButtonText } from '../UnsignedButton/style'
import UnsignedLink from '../UnsignedLink'
import SelectInput from '../SelectInput'
import ButtonSelectInput from '../ButtonSelectInput'

export default function ScheduleConsultationModal({ active = true, disableModalFn = null }) {
  const [consultationType, setConsultationType] = useState('');
  const [consultationLevel, setConsultationLevel] = useState('');

  return (
    <BottomModal active={active} modalHeightPercentage={80}>
        <Title>Agendar consulta</Title>

        <SelectInput  
          labelText='Informe o tipo de consulta'
          defaultText='Tipo de consulta'
          handleSelectedFn={setConsultationType}
        />

        <ButtonSelectInput 
          data={[
            { id: '0', value: 'Rotina' },
            { id: '1', value: 'Exame' },
            { id: '2', value: 'Urgência' }
          ]}
          selectedButtonId={consultationLevel}
          handleChangeSelectedFn={setConsultationLevel}
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