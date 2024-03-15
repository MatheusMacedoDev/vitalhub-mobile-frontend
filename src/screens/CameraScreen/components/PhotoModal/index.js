import { Alert, Modal } from 'react-native'
import React, { useEffect } from 'react'
import { ModalContent, PhotoButton, PhotoButtonsWraper, PhotoImage } from './style'
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

export default function PhotoModal({ photoUri, resetPhotoUriFn = null, isVisible = false, closeModalFn = null, goScreenBackFn = null }) {
    function clearPhoto() {
        resetPhotoUriFn();
        closeModalFn();
    }

    async function uploadPhoto() {
        if (!photoUri)
            return;

        await MediaLibrary.saveToLibraryAsync(photoUri);
        Alert.alert('Foto salva com sucesso');
        goScreenBackFn();
    }

    useEffect(() => {
        console.log(isVisible);
    }, [])

    return (
        <Modal
            animationType='slide'
            transparent={false}
            visible={isVisible}
        >
            <ModalContent>
                <PhotoImage source={{ uri: photoUri }}/>

                <PhotoButtonsWraper>
                    <PhotoButton onPress={clearPhoto}>
                        <FontAwesome name='trash' size={24} color='#fff' />
                    </PhotoButton>
                    <PhotoButton onPress={uploadPhoto}>
                        <FontAwesome name='save' size={24} color='#fff' />
                    </PhotoButton>
                </PhotoButtonsWraper>
            </ModalContent>
        </Modal>
    )
}