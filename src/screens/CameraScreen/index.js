import { View, Text } from 'react-native'
import React from 'react'
import { ScreenContainer } from './style'
import RecordCamera from './components/Record'

export default function CameraScreen() {
  return (
    <ScreenContainer>
        <RecordCamera />
    </ScreenContainer>
  )
}