import { View, Text } from 'react-native'
import React from 'react'
import { DoctorImage, DoctorNameText, DoctorSpecialtiesText, InfoTextWrapper } from './style'
import { DoctorCardContainer } from '../ClinicCard/style'

export default function DoctorCard({ doctorImageUri, doctorName, doctorSpecialties, isSelected = false }) {
  return (
    <DoctorCardContainer isSelected={isSelected}>
        <DoctorImage source={{ uri: doctorImageUri }}/>
        <InfoTextWrapper>
            <DoctorNameText>{ doctorName }</DoctorNameText>
            <DoctorSpecialtiesText>{ doctorSpecialties }</DoctorSpecialtiesText>
        </InfoTextWrapper>
    </DoctorCardContainer>
  )
}