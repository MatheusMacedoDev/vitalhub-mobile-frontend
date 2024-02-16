import { View, Text } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import { ScreenContainer } from '../../components/ScreenContainer/style'
import Calendar from '../../components/Calendar'
import ConsultationBar from '../../components/ConsultationBar'

export default function DoctorConsultScreen() {
  return (
    <ScreenContainer>
        <HomeHeader />
        <Calendar />
        <ConsultationBar />
    </ScreenContainer>
  )
}