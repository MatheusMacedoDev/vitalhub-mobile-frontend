import React, { useState } from 'react';
import { CancelationLink, CardContainer, CardImage, CardInfoContainer, ConsultationTypeText, GreyTimeContainer, GreyTimeText, MedicalRecordLink, PatientAgeText, PatientNameText, SubtitleInfoWrapper, TimeContainer, TimeText } from './style';
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function ConsultationCard({ userName, userEmail, userAge, consultationType, consultationTime, cardType, activeCancelingModalFn = null, activeInsertMedicalRecordModalFn = null, setCurrentUserDataFn = null, handleCardClick = null }) {
    const [profile, setProfile] = useState('patient');

    return (
        <CardContainer onPress={handleCardClick}>
            <CardImage 
                source={require('../../assets/patient-image.png')}
            />
            <CardInfoContainer>
                <PatientNameText>{ userName }</PatientNameText>
                <SubtitleInfoWrapper>
                    <PatientAgeText>{ userAge }</PatientAgeText>
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
                <MedicalRecordLink onPress={() => {
                    activeInsertMedicalRecordModalFn()
                    setCurrentUserDataFn({
                        userName: userName,
                        userAge: userAge,
                        userEmail: userEmail
                    })
                }
                }>Ver prontuário</MedicalRecordLink>
            ) : null}

            { cardType == 'scheduled' ? (
                <CancelationLink onPress={activeCancelingModalFn}>Cancelar</CancelationLink>
            ) : null}
            
        </CardContainer>
    )
}