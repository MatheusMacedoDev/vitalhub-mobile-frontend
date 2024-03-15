import React, { useState } from 'react'
import { ScreenContainer } from './style'
import RecordCamera from './components/Record'
import PhotoModal from './components/PhotoModal';

export default function CameraScreen({ navigation }) {
  const [modalActive, setModalActive] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);

  return (
    <ScreenContainer>
        <RecordCamera 
          setPhotoUri={setPhotoUri}
          openModalFn={() => setModalActive(true)}
        />
        <PhotoModal 
          photoUri={photoUri}
          resetPhotoUriFn={() => setPhotoUri(null)}
          isVisible={modalActive}
          closeModalFn={() => setModalActive(false)}
          goScreenBackFn={() => navigation.navigate('patientViewMedicalRecord', { newPhotoUri: photoUri })}
        />
        
    </ScreenContainer>
  )
}