import { View, Text } from 'react-native'
import React from 'react';
import { Container } from '../../components/Container/style';
import UserMainInfo from '../../components/UserMainInfo';
import { InternalInputsWrapper } from '../../components/InternalInput/style';
import InternalTextArea from '../../components/InternalTextArea';
import { UserProfileImage } from './style';
import MedicalExams from '../../components/MedicalExams';
import UnsignedLink from '../../components/UnsignedLink';
import { ScrollContainer } from '../../components/ScrollContainer/style';

export default function PatientViewMedicalRecord() {
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

            <MedicalExams />

            <UnsignedLink 
                linkText='Voltar'
            />
        </Container>
    </ScrollContainer>
  )
}