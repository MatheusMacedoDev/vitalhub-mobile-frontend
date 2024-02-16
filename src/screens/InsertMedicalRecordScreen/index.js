import { Container } from "../../components/Container/style";
import InternalInput from "../../components/InternalInput";
import { InternalInputsWrapper } from "../../components/InternalInput/style";
import UserMainInfo from "../../components/UserMainInfo";
import { UnsignedButtonsWrapper } from "../../components/UnsignedButton/style";
import UnsignedButton from "../../components/UnsignedButton";
import UnsignedLink from "../../components/UnsignedLink";
import { useState } from "react";
import InternalTextArea from "../../components/InternalTextArea";
import { UserProfileImage } from "../../components/UserImage/style";

export default function InsertMedicalRecordScreen() {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <UserProfileImage 
                resizeMode="cover"
                source={require('../../assets/user-profile-image.png')} 
            />
            <Container>
                <UserMainInfo 
                    username='Richard Kosta'
                    infoArr={[ 
                        '22 anos',
                        'richard.kosta@gmail.com'
                    ]}
                />
                <InternalInputsWrapper>
                    { isEditing ? (
                        <>
                            <InternalInput 
                                inputText="Descrição da consulta"
                                placeholder="Descrição"
                            />
                            <InternalInput 
                                inputText="Diagnóstico do paciente"
                                placeholder="Diagnóstico"
                            />
                            <InternalInput 
                                inputText="Prescrição médica"
                                placeholder="Prescrição médica"
                            />
                        </>
                    ) : 
                        <>
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
                        </> 
                    }
                </InternalInputsWrapper>
                <UnsignedButtonsWrapper>
                    <UnsignedButton 
                        buttonText='Salvar'
                    />
                    { !isEditing ? (
                        <UnsignedButton 
                            buttonText='Editar'
                        />
                    ) : null}
                </UnsignedButtonsWrapper>
                <UnsignedLink 
                    linkText='Cancelar' 
                />
            </Container>
        </>
    )
}