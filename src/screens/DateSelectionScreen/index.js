import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Container } from '../../components/Container/style'
import { Title } from '../../components/Title/style'
import { ButtonLinkWrapper } from '../ClinicSelectionScreen/style'
import UnsignedButton from '../../components/UnsignedButton'
import UnsignedLink from '../../components/UnsignedLink'
import SelectInput from '../../components/SelectInput'
import FullCalender from '../../components/FullCalendar'

export default function DateSelectionScreen() {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    return (
        <Container>
            <Title>Selecionar data</Title>

            <FullCalender 
                selectedDate={selectedDate}
                handleSelectedDateFn={setSelectedDate}
            />

            <SelectInput 
                labelText='Selecione um horário disponível'
                defaultText='Selecionar horário'
                handleSelectedFn={setSelectedTime}
            />

            <ButtonLinkWrapper>
                <UnsignedButton 
                    buttonText='Confirmar'
                />
                <UnsignedLink 
                    linkText='Cancelar'
                />
            </ButtonLinkWrapper>
        </Container>
    )
}