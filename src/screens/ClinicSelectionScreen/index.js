import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Container } from '../../components/Container/style'
import { Title } from '../../components/Title/style'
import ClinicCard from '../../components/ClinicCard'
import { CardsList } from '../../components/ClinicCard/style'
import UnsignedButton from '../../components/UnsignedButton';
import UnsignedLink from '../../components/UnsignedLink';
import { ButtonLinkWrapper } from './style'

export default function ClinicSelectionScreen({ navigation }) {
    const [selectedClinicId, setSelectedClinicId] = useState('');
    const [clinicsData, setClinicsData] = useState([
        {
            clinicId: '0',
            clinicName: 'Clínica Natureh',
            clinicLocation: 'São Paulo, SP',
            clinicStars: '4,5',
            clinicOpenedRange: 'Seg-Sex'
        },
        {
            clinicId: '1',
            clinicName: 'Clínica Natureh',
            clinicLocation: 'São Paulo, SP',
            clinicStars: '4,5',
            clinicOpenedRange: 'Seg-Sex'
        },
        {
            clinicId: '2',
            clinicName: 'Clínica Natureh',
            clinicLocation: 'São Paulo, SP',
            clinicStars: '4,5',
            clinicOpenedRange: 'Seg-Sex'
        },
        {
            clinicId: '3',
            clinicName: 'Clínica Natureh',
            clinicLocation: 'São Paulo, SP',
            clinicStars: '4,5',
            clinicOpenedRange: 'Seg-Sex'
        }
    ])

  return (
    <Container>
        <Title>Selecionar clínica</Title>
        <CardsList 
            data={clinicsData}
            keyExtractor={clinic => clinic.clinicId}
            contentContainerStyle={{ gap: 12 }}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => setSelectedClinicId(item.clinicId)}>
                    <ClinicCard
                        clinicName={item.clinicName}
                        clinicLocation={item.clinicLocation}
                        clinicStarsNumber={item.clinicStars}
                        clinicOpenedRange={item.clinicOpenedRange}
                        isSelected={item.clinicId == selectedClinicId}
                    />
                </TouchableOpacity>
            }
        />
        <ButtonLinkWrapper>
            <UnsignedButton 
                buttonText='Continuar'
                handleClickFn={() => navigation.navigate('doctorSelection')}
            />
            <UnsignedLink 
                linkText='Cancelar'
            />
        </ButtonLinkWrapper>
    </Container>
  )
}