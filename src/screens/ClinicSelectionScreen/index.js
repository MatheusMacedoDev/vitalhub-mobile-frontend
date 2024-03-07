import React, { useState } from 'react'
import { Container } from '../../components/Container/style'
import { Title } from '../../components/Title/style'
import ClinicCard from '../../components/ClinicCard'
import UnsignedButton from '../../components/UnsignedButton';
import UnsignedLink from '../../components/UnsignedLink';
import { ButtonLinkWrapper } from './style'
import { ScrollContainer } from '../../components/ScrollContainer/style'
import { CardsList, TouchableCard } from '../../components/Card/style'

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
        },
        {
            clinicId: '4',
            clinicName: 'Clínica Natureh',
            clinicLocation: 'São Paulo, SP',
            clinicStars: '4,5',
            clinicOpenedRange: 'Seg-Sex'
        },
        {
            clinicId: '5',
            clinicName: 'Clínica Natureh',
            clinicLocation: 'São Paulo, SP',
            clinicStars: '4,5',
            clinicOpenedRange: 'Seg-Sex'
        },
        {
            clinicId: '6',
            clinicName: 'Clínica Natureh',
            clinicLocation: 'São Paulo, SP',
            clinicStars: '4,5',
            clinicOpenedRange: 'Seg-Sex'
        },
        {
            clinicId: '7',
            clinicName: 'Clínica Natureh',
            clinicLocation: 'São Paulo, SP',
            clinicStars: '4,5',
            clinicOpenedRange: 'Seg-Sex'
        }
    ])

  return (
    <Container>
        <Title>Selecionar clínica</Title>
        <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
            <CardsList 
                data={clinicsData}
                keyExtractor={clinic => clinic.clinicId}
                contentContainerStyle={{ gap: 12}}
                renderItem={({ item }) =>
                    <TouchableCard onPress={() => setSelectedClinicId(item.clinicId)}>
                        <ClinicCard
                            clinicName={item.clinicName}
                            clinicLocation={item.clinicLocation}
                            clinicStarsNumber={item.clinicStars}
                            clinicOpenedRange={item.clinicOpenedRange}
                            isSelected={item.clinicId == selectedClinicId}
                        />
                    </TouchableCard>
                }
            />
        </ScrollContainer>
        <ButtonLinkWrapper>
            <UnsignedButton 
                buttonText='Continuar'
                handleClickFn={() => navigation.navigate('doctorSelection')}
            />
            <UnsignedLink 
                linkText='Cancelar'
                handleClickFn={() => navigation.navigate('Main')}
            />
        </ButtonLinkWrapper>
    </Container>
  )
}