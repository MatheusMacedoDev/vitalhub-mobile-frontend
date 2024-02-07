import React from 'react'
import { ButtonText, ButtonContainer, GoogleButtonContainer, GoogleButtonText, GoogleIcon } from './style'

export default function UnsignedButton({ buttonText, isGoogleButton = false }) {
  if (isGoogleButton) {
    return (
      <GoogleButtonContainer>
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
    <ButtonContainer>
      <ButtonText>
        { buttonText }
      </ButtonText>
    </ButtonContainer>
  )
}