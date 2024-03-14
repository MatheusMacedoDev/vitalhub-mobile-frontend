import React from 'react';
import { ButtonsWrapper, CancelationContainer, CancelationLink, ExamPhotosContainer, Line, MedicalExamsContainer, NoPhotoText, SendButtonContainer, SendButtonText } from './style';
import InputLabel from '../InputLabel/style';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import InternalTextArea from '../InternalTextArea';

export default function MedicalExams({ handleSendClick }) {
  return (
    <MedicalExamsContainer>
        <InputLabel fontSize={16}>Exames médicos</InputLabel>
        <ExamPhotosContainer>
            <FontAwesome5 name="file" size={22} color="#4E4B59" />
            <NoPhotoText>Nenhuma foto informada</NoPhotoText>
        </ExamPhotosContainer>
        <ButtonsWrapper>
            <SendButtonContainer>
                <MaterialCommunityIcons name="camera-plus-outline" size={22} color="white" />
                <SendButtonText onPress={handleSendClick}>Enviar</SendButtonText>
            </SendButtonContainer>
            <CancelationContainer>
                <CancelationLink>Cancelar</CancelationLink>
            </CancelationContainer>
        </ButtonsWrapper>

        <Line />

        <InternalTextArea 
            textArea='Resultado do exame de sangue : tudo normal'
        />
    </MedicalExamsContainer>
  )
}