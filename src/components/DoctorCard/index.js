import { View, Text } from 'react-native'
import React from 'react'
import { CardContainer, DoctorImage, DoctorNameText, DoctorSpecialtiesText, InfoTextWrapper } from './style'

export default function DoctorCard({ doctorImageUri, doctorName, doctorSpecialties }) {
  return (
    <CardContainer>
        <DoctorImage />
        <InfoTextWrapper>
            <DoctorNameText></DoctorNameText>
            <DoctorSpecialtiesText></DoctorSpecialtiesText>
        </InfoTextWrapper>
    </CardContainer>
  )
}