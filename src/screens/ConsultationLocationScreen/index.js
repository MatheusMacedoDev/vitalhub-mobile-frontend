import { View, Text } from 'react-native'
import React from 'react'
import { LocationContainer, MapImage } from './style'
import { SecondSubtitle, Title } from '../../components/Title/style'
import InternalTextArea from '../../components/InternalTextArea'
import { InternalInputsWrapper } from '../../components/InternalInput/style'
import { SplitedTextAreasContainer } from '../../components/InternalTextArea/style'

export default function ConsultationLocationScreen() {
  return (
    <>
        <MapImage 
            source={require('../../assets/map-image.png')}
        />
        <LocationContainer>
            <Title marginTop={10}>Clínica Natureh</Title>
            <SecondSubtitle>São Paulo, SP</SecondSubtitle>
            
            <InternalInputsWrapper>
                <InternalTextArea 
                    inputText='Endereço'
                    textArea='Rua Vicenso Silva, 987'
                />
                <SplitedTextAreasContainer>
                    <InternalTextArea 
                        widthPercentage={45} 
                        inputText='Número'
                        textArea='578'
                    />
                    <InternalTextArea 
                        widthPercentage={45} 
                        inputText='Bairro'
                        textArea='Moema-SP'
                    />
                </SplitedTextAreasContainer>
            </InternalInputsWrapper>
        </LocationContainer>
    </>
  )
}