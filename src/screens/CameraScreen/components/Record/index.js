import React, { useRef, useState } from 'react';

import { Camera } from 'expo-camera';
import { StyleSheet } from 'react-native';
import { CameraButton, CameraButtonsBar } from './style';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function RecordCamera({ setPhotoUri = null, openModalFn = null }) {
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [flashOn, setFlashOn] = useState(false);
    const cameraRef = useRef(null)

    function flipCamera() {
        if (cameraType == Camera.Constants.Type.back) {
            setFlashOn(false);
            setCameraType(Camera.Constants.Type.front);
        }
        else
            setCameraType(Camera.Constants.Type.back);
    }

    function toggleFlash() {
        setFlashOn(!flashOn);
    }

    async function capturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhotoUri(photo.uri);
            openModalFn(); 
        }
    }

    return (
        <Camera
            type={cameraType}
            style={styles.camera}
            ratio='16:9'
            ref={cameraRef}
            flashMode={flashOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
            autoFocus={Camera.Constants.AutoFocus.on}
        >
            <CameraButtonsBar>
                <CameraButton onPress={toggleFlash}>
                    {
                        flashOn ? (
                            <MaterialIcons name='flash-on' size={48} color='#fff' />
                        ) : (
                            <MaterialIcons name='flash-off' size={48} color='#fff' />
                        )
                    }
                </CameraButton>
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