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
        userName: 'User Name',
        userAge: 'X anos',
        userEmail: 'useremail@email.com'
    }  
}) {
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
        />
        <UnsignedLink 
            linkText='Cancelar'
            handleClickFn={disableModalFn}
        />
    </Modal>
  );
}