import React from 'react';
import Modal from '../Modal';
import UnsignedButton from '../UnsignedButton';
import UnsignedLink from '../UnsignedLink';
import UserMainInfo from '../UserMainInfo';
import { ModalImage } from '../Modal/style';

export default function InsertMedicalRecordModal({ 
    consultationSituation = 'pendente',
    navigation,
    active, 
    disableModalFn = null,
    userData = {
        userName: 'user name',
        userAge: 'x anos',
        userEmail: 'useremail@email.com'
    }
}) {
    function handleClose(route) {
        disableModalFn();
        navigation.navigate(route);
    }

    return (
        <Modal active={active} modalHeighPercentage={60}>
            <ModalImage heightPercentage={50} source={require('../../assets/patient-image-extended.png')} />
            <UserMainInfo 
                username={userData.userName}
                infoArr={[
                    userData.userAge,
                    userData.userEmail
                ]}
            />
            { consultationSituation === 'pendente' ? (
                <UnsignedButton 
                    buttonText='Inserir Prontuário'
                    handleClickFn={() => handleClose('insertMedicalRecord')}
                />
            ) : (
                <UnsignedButton 
                    buttonText='Ver Local da Consulta'
                    handleClickFn={() => handleClose('consultationLocation')}
                />

            )}
            <UnsignedLink 
                linkText='Cancelar'
                handleClickFn={disableModalFn}
            />
        </Modal>
    );
}