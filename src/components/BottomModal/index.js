import React from 'react'
import { BottomModalContainer, TopBlackBox } from './style'
import { Portal } from 'react-native-portalize';

export default function BottomModal({ active = false, modalHeightPercentage = 70, children }) {
  return (
    <Portal>
      <TopBlackBox active={active}>
          <BottomModalContainer active={active} heightPercentage={modalHeightPercentage}>
              { children }
          </BottomModalContainer>
      </TopBlackBox>
    </Portal>
  )
}