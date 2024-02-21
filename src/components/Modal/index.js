import React from 'react'
import { BlackBox, ModalContainer } from './style'

export default function Modal({ active, children  }) {
  return (
    <BlackBox active={active}>
        <ModalContainer active={active}>
            { children }
        </ModalContainer>
    </BlackBox>
  )
}