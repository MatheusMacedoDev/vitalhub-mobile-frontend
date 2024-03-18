import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container/style';
import UserMainInfo from '../../components/UserMainInfo';
import { InternalInputsWrapper } from '../../components/InternalInput/style';
import InternalTextArea from '../../components/InternalTextArea';
import { UserProfileImage } from './style';
import MedicalExams from '../../components/MedicalExams';
import UnsignedLink from '../../components/UnsignedLink';
import { ScrollContainer } from '../../components/ScrollContainer/style';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function PatientViewMedicalRecord({ navigation, route }) {
    const [photosUri, setPhotosUri] = useState([]);
    const { newPhotoUri } = route.params;

    useEffect(() => {
        if (newPhotoUri != '') {
            setPhotosUri(
                [
                    ...photosUri,
                    newPhotoUri
                ]
            )
        }
    }, [newPhotoUri]);

  return (
    <ScrollContainer>
        <UserProfileImage 
            source={require('../../assets/doctor-image-extended.png')}
        />
        <Container>
            <UserMainInfo 
                username='Dr. Claudio'
                infoArr={[
                    'Cliníco geral',
                    'CRM-15286'
                ]}
            />

            <InternalInputsWrapper>
                <InternalTextArea 
                    inputText="Descrição da consulta"
                    textArea="O paciente possuí uma infecção no ouvido. Necessário repouse de 2 dias e acompanhamento médico constante"
                />
                <InternalTextArea 
                    inputText="Descrição da consulta"
                    textArea="Infecção no ouvido"
                />
                <InternalTextArea 
                    inputText="Prescrição médica"
                    textArea="Medicamento: Advil
                    Dosagem: 50 mg
                    Frequência: 3 vezes ao dia
                    Duração: 3 dias"
                />
            </InternalInputsWrapper>

            <MedicalExams
                handleSendClick={async () => {
                    await Camera.requestCameraPermissionsAsync();
                    await MediaLibrary.requestPermissionsAsync();
                    navigation.navigate('Camera')
                }}
                photosUri={photosUri}
            />

            <UnsignedLink 
                linkText='Voltar'
                handleClickFn={() => navigation.navigate('Main')}
            />
        </Container>
    </ScrollContainer>
  )
}