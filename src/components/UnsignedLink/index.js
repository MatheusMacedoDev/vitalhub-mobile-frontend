import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinkWrapper, LinkText, BlueLink, GreyLink } from './style'

export default function UnsignedLink({ additionalText = '', linkText, isGreyLink = false, handleClickFn = null }) {
  return (
    <LinkWrapper $isCenter={!isGreyLink}>
      <TouchableOpacity onPress={handleClickFn}>
        { additionalText != '' && <LinkText>{ additionalText }</LinkText> }
        {isGreyLink 
          ? <GreyLink>{ linkText }</GreyLink>
          : <BlueLink>{ linkText }</BlueLink>}
      </TouchableOpacity>
    </LinkWrapper>
  )
}