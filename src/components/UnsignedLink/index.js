import { View, Text } from 'react-native'
import React from 'react'
import { LinkWrapper, LinkText, BlueLink, GreyLink } from './style'

export default function UnsignedLink({ additionalText, linkText, isGreyLink = false }) {
  return (
    <LinkWrapper>
      <LinkText>{ additionalText }</LinkText>
      {isGreyLink 
        ? <BlueLink>{ linkText }</BlueLink>
        : <GreyLink>{ linkText }</GreyLink>}
    </LinkWrapper>
  )
}