import { View, Text } from 'react-native'
import React from 'react'
import { CardContainer, DoctorImage, DoctorNameText, DoctorSpecialtiesText, InfoTextWrapper } from './style'

export default function DoctorCard({ doctorImageUri, doctorName, doctorSpecialties, isSelected = false }) {
  return (
    <CardContainer isSelected={isSelected}>
        <DoctorImage source={{ uri: doctorImageUri }}/>
        <InfoTextWrapper>
            <DoctorNameText>{ doctorName }</DoctorNameText>
            <DoctorSpecialtiesText>{ doctorSpecialties }</DoctorSpecialtiesText>
        </InfoTextWrapper>
    </CardContainer>
  )
}