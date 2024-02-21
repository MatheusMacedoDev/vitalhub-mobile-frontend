import React from 'react'
import { BlackBox, ModalContainer } from './style'

export default function Modal({ active, children, modalHeighPercentage = 50 }) {
  return (
    <BlackBox active={active}>
        <ModalContainer active={active} heightPercentage={modalHeighPercentage}>
            { children }
        </ModalContainer>
    </BlackBox>
  )
}