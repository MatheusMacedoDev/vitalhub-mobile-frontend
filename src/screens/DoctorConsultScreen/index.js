import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../../components/HomeHeader'
import { ScreenContainer } from '../../components/ScreenContainer/style'
import Calendar from '../../components/Calendar'
import ConsultationBar from '../../components/ConsultationBar'
import { Container } from '../../components/Container/style';
import ConsultationCard from '../../components/ConsultationCard'

export default function DoctorConsultScreen() {
  const [selectedConsultationType, setSelectedConsultationType] = useState(0);

  return (
    <ScreenContainer>
        <HomeHeader />
        <Calendar />
        <Container>
          <ConsultationBar
            selectedType={ selectedConsultationType }
            changeSelectedType={ setSelectedConsultationType }
          />
          <ConsultationCard 
            patientName='Niccole Sarga'
            patientAge='22 anos'
            consultationType='Rotina'
            consultationTime='14:00'
            cardType='scheduled'
          />
          <ConsultationCard 
            patientName='Niccole Sarga'
            patientAge='22 anos'
            consultationType='Rotina'
            consultationTime='14:00'
            cardType='performed'
          />
          <ConsultationCard 
            patientName='Niccole Sarga'
            patientAge='22 anos'
            consultationType='Rotina'
            consultationTime='14:00'
            cardType='canceled'
          />
        </Container>
    </ScreenContainer>
  )
}