import React from 'react'
import { BlackBox, ModalContainer } from './style'
import { Portal } from 'react-native-portalize'

export default function Modal({ active, children, modalHeighPercentage = 50 }) {
  return (
    <Portal>
      <BlackBox active={active}>
          <ModalContainer active={active} heightPercentage={modalHeighPercentage}>
              { children }
          </ModalContainer>
      </BlackBox>
    </Portal>
  )
}