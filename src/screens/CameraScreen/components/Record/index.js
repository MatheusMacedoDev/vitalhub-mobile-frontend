import React, { useEffect, useRef, useState } from 'react';

import { Camera } from 'expo-camera';
import { StyleSheet } from 'react-native';
import { CameraButton, CameraButtonsBar } from './style';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function RecordCamera({ setPhotoUri = null, handleOpenModal = null }) {
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const cameraRef = useRef(null)

    async function requestPermition() {
        await Camera.requestCameraPermissionsAsync();
    }

    useEffect(() => {
        requestPermition();
    }, []);

    function flipCamera() {
        if (cameraType == Camera.Constants.Type.back)
            setCameraType(Camera.Constants.Type.front);
        else
            setCameraType(Camera.Constants.Type.back);
    }

    async function capturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.TakePictureAsync();
            setPhotoUri(photo.uri);
            console.log(photo.uri);
    
            //handleOpenModal(); 
        }
    }

    return (
        <Camera
            type={cameraType}
            style={styles.camera}
            ratio='16:9'
            ref={cameraRef}
        >
            <CameraButtonsBar>
                <CameraButton onPress={capturePhoto}>
                    <FontAwesome name='camera' size={40} color='#fff' />
                </CameraButton>
                <CameraButton onPress={flipCamera}>
                    <MaterialCommunityIcons name="camera-flip" size={48} color="#fff" />
                </CameraButton>
            </CameraButtonsBar>
        </Camera>
    )
}

const styles = StyleSheet.create({
    camera: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    }
});