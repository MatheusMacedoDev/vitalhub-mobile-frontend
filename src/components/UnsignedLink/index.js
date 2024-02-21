import { View, Text } from 'react-native'
import React from 'react'
import { LinkWrapper, LinkText, BlueLink, GreyLink } from './style'

export default function UnsignedLink({ additionalText = '', linkText, isGreyLink = false, handleClickFn = null }) {
  return (
    <LinkWrapper $isCenter={!isGreyLink}>
      { additionalText != '' && <LinkText>{ additionalText }</LinkText> }
      {isGreyLink 
        ? <GreyLink onPress={handleClickFn}>{ linkText }</GreyLink>
        : <BlueLink onPress={handleClickFn}>{ linkText }</BlueLink>}
    </LinkWrapper>
  )
}