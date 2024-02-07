import { View, Text } from 'react-native'
import React from 'react'
import { LinkWrapper, LinkText, BlueLink, GreyLink } from './style'

export default function UnsignedLink({ additionalText = '', linkText, isGreyLink = false }) {
  return (
    <LinkWrapper $isCenter={!isGreyLink}>
      { additionalText != '' && <LinkText>{ additionalText }</LinkText> }
      {isGreyLink 
        ? <GreyLink>{ linkText }</GreyLink>
        : <BlueLink>{ linkText }</BlueLink>}
    </LinkWrapper>
  )
}