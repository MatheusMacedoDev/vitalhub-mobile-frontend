import React from 'react'
import { BlackBox, ModalContainer } from './style'
import { Title } from '../Title/style';
import { CommandText } from '../CommandText/style';
import UnsignedButton from '../UnsignedButton';
import UnsignedLink from '../UnsignedLink'

export default function CancelConsultationModal({ active, disableModalFn = null }) {
  return (
    <BlackBox active={active}>
        <ModalContainer active={active}>
            <Title marginTop={0}>Cancelar consulta</Title>
            <CommandText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</CommandText>
            <UnsignedButton 
              buttonText='Confirmar'
            />
            <UnsignedLink 
              handleClickFn={disableModalFn}
              linkText='Cancelar'
            />
        </ModalContainer>
    </BlackBox>
  )
}