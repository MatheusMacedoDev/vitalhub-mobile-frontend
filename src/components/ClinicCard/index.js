import { View, Text } from 'react-native'
import React from 'react'
import { CardAdditionalInfo, CardContainer, CardTextInfo, ClinicLocationText, ClinicNameText, OpenedDaysContainer, OpenedDaysText, StarContainer, StarText } from './style'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ClinicCard({ clinicName, clinicLocation, clinicStarsNumber, clinicOpenedRange, isSelected = false }) {
  return (
    <CardContainer onPre isSelected={isSelected}>
        <CardTextInfo>
            <ClinicNameText>{ clinicName }</ClinicNameText>
            <ClinicLocationText>{ clinicLocation }</ClinicLocationText>
        </CardTextInfo>
        <CardAdditionalInfo>
            <StarContainer>
                <AntDesign name="star" size={20} color="#F9A620" />
                <StarText>{ clinicStarsNumber }</StarText>
            </StarContainer>
            <OpenedDaysContainer>
                <FontAwesome5 name="calendar-alt" size={14} color="#49B3BA" />
                <OpenedDaysText>{ clinicOpenedRange }</OpenedDaysText>
            </OpenedDaysContainer>
        </CardAdditionalInfo>
    </CardContainer>
  )
}