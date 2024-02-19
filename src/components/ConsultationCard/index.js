import { View, Text } from 'react-native'
import React from 'react'
import { CancelationLink, CardContainer, CardImage, CardInfoContainer, ConsultationTypeText, GreyTimeContainer, GreyTimeText, MedicalRecordLink, PatientAgeText, PatientNameText, SubtitleInfoWrapper, TimeContainer, TimeText } from './style';
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function ConsultationCard({ patientName, patientAge, consultationType, consultationTime, cardType }) {
  return (
    <CardContainer>
        <CardImage 
            source={require('../../assets/patient-image.png')}
        />
        <CardInfoContainer>
            <PatientNameText>{ patientName }</PatientNameText>
            <SubtitleInfoWrapper>
                <PatientAgeText>{ patientAge }</PatientAgeText>
                <FontAwesome name="circle" size={5} color="#D9D9D9" />
                <ConsultationTypeText>{ consultationType }</ConsultationTypeText>
            </SubtitleInfoWrapper>
            { cardType == 'scheduled' ? (
                <TimeContainer>
                    <Entypo name="back-in-time" size={18} color="#49B3BA" />
                    <TimeText>{ consultationTime }</TimeText>
                </TimeContainer>
            ) : (
                <GreyTimeContainer>
                    <Entypo name="back-in-time" size={18} color="#4E4B59" />
                    <GreyTimeText>{ consultationTime }</GreyTimeText>
                </GreyTimeContainer>
            ) }
        </CardInfoContainer>

        { cardType == 'performed' ? (
            <MedicalRecordLink>Ver prontuário</MedicalRecordLink>
        ) : null}

        { cardType == 'scheduled' ? (
            <CancelationLink>Cancelar</CancelationLink>
        ) : null}
        
    </CardContainer>
  )
}