import { View, Text } from 'react-native'
import React from 'react'
import Modal from '../Modal'
import { ModalImage } from '../Modal/style'
import UserMainInfo from '../UserMainInfo'
import UnsignedButton from '../UnsignedButton'
import UnsignedLink from '../UnsignedLink'

export default function ViewConsultationLocationModal({
    active,
    disableModalFn = null,
    doctorData = {
        doctorName: '',
        doctorSpecialty: '',
        doctorCRM: ''
    },
    navigation
}) {
    return (
        <Modal active={active} modalHeighPercentage={60}>
            <ModalImage 
                heightPercentage={50}
                source={require('../../assets/doctor-image-extended.png')}
            />
            <UserMainInfo
                username={doctorData.doctorName}
                infoArr={[
                    doctorData.doctorSpecialty,
                    doctorData.doctorCRM
                ]}
            />
            <UnsignedButton 
                buttonText='Ver local da consulta'
                handleClickFn={() => navigation.navigate('consultationLocation')}
            />
            <UnsignedLink 
                linkText='Cancelar'
                handleClickFn={disableModalFn}
            />
        </Modal>
    )
}