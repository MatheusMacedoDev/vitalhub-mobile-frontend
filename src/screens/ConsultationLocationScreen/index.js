import React from 'react';
import { LocationContainer } from './style';
import { SecondSubtitle, Title } from '../../components/Title/style';
import InternalTextArea from '../../components/InternalTextArea';
import { InternalInputsWrapper } from '../../components/InternalInput/style';
import { SplitedTextAreasContainer } from '../../components/InternalTextArea/style';
import Map from '../../components/Map';
import UnsignedLink from '../../components/UnsignedLink';

export default function ConsultationLocationScreen({ navigation }) {
  return (
    <>
        <Map />
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
                <UnsignedLink 
                    linkText='Cancelar'
                    handleClickFn={() => navigation.replace('Main')}
                />
            </InternalInputsWrapper>
        </LocationContainer>
    </>
  )
}