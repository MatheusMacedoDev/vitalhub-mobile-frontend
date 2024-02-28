import React from 'react';
import Modal from '../Modal';
import { ModalImage } from '../Modal/style';
import UserMainInfo from '../UserMainInfo';
import UnsignedButton from '../UnsignedButton';
import UnsignedLink from '../UnsignedLink';

export default function ViewConsultationLocationModal(
    active,
    disableModalFn = null,
    doctorData = {
        doctorName: 'Doctor Name',
        doctorCRM: 'CRM/SP-03944',
        doctorSpecialty: 'Specialty',
        doctorEmail: 'doctor@email.com'
    }
) {
  return (
    <Modal active={active} modalHeighPercentage={60}>
        <ModalImage heightPercentage={50} source={require('../../assets/doctor-image-extended.png')} />
        <UserMainInfo 
            username={doctorData.doctorName}
            infoArr={[
                doctorData.doctorSpecialty, 
                doctorData.doctorCRM
            ]}
        />

        <UnsignedButton
            buttonText='Ver local da consulta'
        />

        <UnsignedLink 
            linkText='Cancelar'
            handleClickFn={disableModalFn}
        />
    </Modal>
  )
}