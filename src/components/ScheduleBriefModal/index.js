import React from 'react';
import Modal from '../Modal';
import { BigGroup, SmallGroup, SmallSubtitle, SmallTitle, Subtitle, Title } from '../Title/style';
import UnsignedButton from '../UnsignedButton';
import UnsignedLink from '../UnsignedLink';

export default function ScheduleBriefModal({ active, disableModalFn = null, confirmModalFn = null }) {
  return (
    <Modal 
      active={active}
      modalHeighPercentage={75}
    >
      <BigGroup>
        <Title $marginTop={0}>Agendar consulta</Title>
        <Subtitle>Consulte os dados selecionados para a sua consulta</Subtitle>
      </BigGroup>

      <SmallGroup>
        <SmallTitle marginTop={0}>Data da consulta:</SmallTitle>
        <SmallSubtitle>1 de Novembro de 2023</SmallSubtitle>
      </SmallGroup>
      <SmallGroup>
        <SmallTitle marginTop={0}>Médico(a) da consulta</SmallTitle>
        <SmallSubtitle>Dra Alessandra</SmallSubtitle>
        <SmallSubtitle>Demartologa, Esteticista</SmallSubtitle>
      </SmallGroup>
      <SmallGroup>
        <SmallTitle marginTop={0}>Local da consulta</SmallTitle>
        <SmallSubtitle>São Paulo, SP</SmallSubtitle>
      </SmallGroup>
      <SmallGroup>
        <SmallTitle marginTop={0}>Tipo da consulta</SmallTitle>
        <SmallSubtitle>Rotina</SmallSubtitle>
      </SmallGroup>

      <UnsignedButton 
        buttonText='Confirmar'
        handleClickFn={confirmModalFn}
      />
      <UnsignedLink 
        linkText='Cancelar'
        handleClickFn={disableModalFn}
      />
    </Modal>
  )
}