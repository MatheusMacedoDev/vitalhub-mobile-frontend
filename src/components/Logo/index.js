import { View, Text } from 'react-native'
import React from 'react'
import { LogoImage } from './style'

export default function Logo() {
    return (
        <LogoImage
            source={require('../../assets/vitalhub-logo.png')}
        />
    )
}
