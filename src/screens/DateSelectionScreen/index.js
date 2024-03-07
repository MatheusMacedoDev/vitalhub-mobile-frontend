import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Container } from '../../components/Container/style'
import { Title } from '../../components/Title/style'
import { ButtonLinkWrapper } from '../ClinicSelectionScreen/style'
import UnsignedButton from '../../components/UnsignedButton'
import UnsignedLink from '../../components/UnsignedLink'
import SelectInput from '../../components/SelectInput'
import FullCalender from '../../components/FullCalendar'
import ScheduleBriefModal from '../../components/ScheduleBriefModal'
import { Host } from 'react-native-portalize'

export default function DateSelectionScreen({ navigation }) {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    const [avaliableTimesData, setAvaliableTimesData] = useState(['12:30', '14:00', '15:30', '16:00', '17:00']);

    const [isScheduleBriefActive, setIsScheduleBriefActive] = useState(false);

    return (
        <Host>
            <ScheduleBriefModal 
                active={isScheduleBriefActive}
                disableModalFn={() => setIsScheduleBriefActive(false)}
                confirmModalFn={() => {
                    setIsScheduleBriefActive(false);
                    navigation.navigate('Main');
                }}
            />
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
                    data={avaliableTimesData}
                />

                <ButtonLinkWrapper>
                    <UnsignedButton 
                        buttonText='Confirmar'
                        handleClickFn={() => setIsScheduleBriefActive(true)}
                    />
                    <UnsignedLink 
                        linkText='Cancelar'
                        handleClickFn={() => navigation.navigate('Main')}
                    />
                </ButtonLinkWrapper>
            </Container>
        </Host>
    )
}