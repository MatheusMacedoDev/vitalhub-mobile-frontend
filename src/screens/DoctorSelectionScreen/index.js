import { TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Container } from '../../components/Container/style'
import { Title } from '../../components/Title/style'
import { ButtonLinkWrapper } from '../ClinicSelectionScreen/style'
import UnsignedButton from '../../components/UnsignedButton'
import UnsignedLink from '../../components/UnsignedLink'
import DoctorCard from '../../components/DoctorCard'
import { CardsList } from '../../components/Card/style'
import { ScrollContainer } from '../../components/ScrollContainer/style'

export default function DoctorSelectionScreen({ navigation }) {
  const [selectedDoctorId, setSelectedDoctorId] = useState(0);
  const [doctorsData, setDoctorsData] = useState([
    {
      doctorId: 1,
      doctorImageUri: 'https://avatars.githubusercontent.com/u/7559318?v=4',
      doctorName: 'Dr Kumushiro',
      doctorSpecialties: 'Cirurgião, Cardiologista'
    },
    {
      doctorId: 2,
      doctorImageUri: 'https://avatars.githubusercontent.com/u/7559318?v=4',
      doctorName: 'Dr Kumushiro',
      doctorSpecialties: 'Cirurgião, Cardiologista'
    },
    {
      doctorId: 3,
      doctorImageUri: 'https://avatars.githubusercontent.com/u/7559318?v=4',
      doctorName: 'Dr Kumushiro',
      doctorSpecialties: 'Cirurgião, Cardiologista'
    },
    {
      doctorId: 4,
      doctorImageUri: 'https://avatars.githubusercontent.com/u/7559318?v=4',
      doctorName: 'Dr Kumushiro',
      doctorSpecialties: 'Cirurgião, Cardiologista'
    },
    {
      doctorId: 5,
      doctorImageUri: 'https://avatars.githubusercontent.com/u/7559318?v=4',
      doctorName: 'Dr Kumushiro',
      doctorSpecialties: 'Cirurgião, Cardiologista'
    },
    {
      doctorId: 6,
      doctorImageUri: 'https://avatars.githubusercontent.com/u/7559318?v=4',
      doctorName: 'Dr Kumushiro',
      doctorSpecialties: 'Cirurgião, Cardiologista'
    },
    {
      doctorId: 7,
      doctorImageUri: 'https://avatars.githubusercontent.com/u/7559318?v=4',
      doctorName: 'Dr Kumushiro',
      doctorSpecialties: 'Cirurgião, Cardiologista'
    },
    {
      doctorId: 8,
      doctorImageUri: 'https://avatars.githubusercontent.com/u/7559318?v=4',
      doctorName: 'Dr Kumushiro',
      doctorSpecialties: 'Cirurgião, Cardiologista'
    },
    {
      doctorId: 9,
      doctorImageUri: 'https://avatars.githubusercontent.com/u/7559318?v=4',
      doctorName: 'Dr Kumushiro',
      doctorSpecialties: 'Cirurgião, Cardiologista'
    }
  ]);

  return (
    <Container>
      <Title>Selecionar médico</Title>

      <ScrollContainer horizontal showsVerticalScrollIndicator={false}>
        <CardsList 
          data={doctorsData}
          keyExtractor={doctor => doctor.doctorId}
          contentContainerStyle={{ gap: 12 }}
          renderItem={( { item } ) =>
            <TouchableOpacity onPress={() => setSelectedDoctorId(item.doctorId)}>
              <DoctorCard
                doctorImageUri={item.doctorImageUri}
                doctorName={item.doctorName}
                doctorSpecialties={item.doctorSpecialties}
                isSelected={item.doctorId == selectedDoctorId}
              />
            </TouchableOpacity>
          }
        />
      </ScrollContainer>

      <ButtonLinkWrapper>
        <UnsignedButton 
          buttonText='Continuar'
          handleClickFn={() => navigation.navigate('dateSelection')}
        />
        <UnsignedLink 
          linkText='Cancelar'
          handleClickFn={() => navigation.navigate('Main')}
        />
      </ButtonLinkWrapper>
    </Container>
  )
}