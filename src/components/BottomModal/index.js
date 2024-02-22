import { View, Text } from 'react-native'
import React from 'react'
import { BottomModalContainer, TopBlackBox } from './style'

export default function BottomModal({ active = false, modalHeightPercentage = 70, children }) {
  return (
    <TopBlackBox active={active}>
        <BottomModalContainer active={active} heightPercentage={modalHeightPercentage}>
            { children }
        </BottomModalContainer>
    </TopBlackBox>
  )
}