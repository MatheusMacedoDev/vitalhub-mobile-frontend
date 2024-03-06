import React from 'react';
import Modal from '../Modal';
import UnsignedButton from '../UnsignedButton';
import UnsignedLink from '../UnsignedLink';
import UserMainInfo from '../UserMainInfo';
import { ModalImage } from '../Modal/style';

export default function InsertMedicalRecordModal({ 
    active, 
    disableModalFn = null,
    userData = {
        userName: 'user name',
        userAge: 'x anos',
        userEmail: 'useremail@email.com'
    },
    navigation 
}) {

    function passToInsertMedicalRecord() {
        navigation.navigate('insertMedicalRecord');
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
            <UnsignedButton 
                buttonText='Inserir Prontuário'
                handleClickFn={passToInsertMedicalRecord}
            />
            <UnsignedLink 
                linkText='Cancelar'
                handleClickFn={disableModalFn}
            />
        </Modal>
    );
}