import { View, Text } from 'react-native'
import React, { useState } from 'react'
import BottomModal from '../BottomModal'
import { Title } from '../Title/style'
import UnsignedButton from '../UnsignedButton'
import { ButtonText } from '../UnsignedButton/style'
import UnsignedLink from '../UnsignedLink'
import SelectInput from '../SelectInput'
import ButtonSelectInput from '../ButtonSelectInput'
import InternalInput from '../InternalInput'

export default function ScheduleConsultationModal({ active = true, disableModalFn = null, navigation = null }) {
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
          selectedButtonId={consultationLevel}
          handleChangeSelectedFn={setConsultationLevel}
        />

        <InternalInput 
          inputText='Prescrição médica'
          inputTextFontSize={14}
          placeholder='Prescrição médica'
        />

        <UnsignedButton 
            buttonText='Continuar'
            handleClickFn={() => {
              disableModalFn();
              navigation.navigate('clinicSelection');
            }}
        />
        <UnsignedLink
            linkText='Cancelar'
            handleClickFn={disableModalFn}
        />
    </BottomModal>
  )
}