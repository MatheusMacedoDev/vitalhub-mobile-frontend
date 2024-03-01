import React from 'react'
import { ButtonText, ButtonContainer, GoogleButtonContainer, GoogleButtonText, GoogleIcon } from './style'

export default function UnsignedButton({ buttonText, isGoogleButton = false, handleClickFn = null }) {
  if (isGoogleButton) {
    return (
      <GoogleButtonContainer onPress={handleClickFn}>
        <GoogleIcon 
          source={require('../../assets/google-icon.png')}
        />
        <GoogleButtonText>
          { buttonText }
        </GoogleButtonText>
      </GoogleButtonContainer>
    )
  }

  return (
    <ButtonContainer onPress={handleClickFn}>
      <ButtonText>
        { buttonText }
      </ButtonText>
    </ButtonContainer>
  )
}