import { TouchableOpacity } from 'react-native'
import React from 'react'
import { LinkWrapper, LinkText, BlueLink, GreyLink, PressableLink } from './style'

export default function UnsignedLink({ additionalText = '', linkText, isGreyLink = false, handleClickFn = null }) {
  return (
    <LinkWrapper $isCenter={!isGreyLink}>
      { additionalText != '' && <LinkText>{ additionalText }</LinkText> }
      <PressableLink onPress={handleClickFn}>
        {isGreyLink 
          ? <GreyLink>{ linkText }</GreyLink>
          : <BlueLink>{ linkText }</BlueLink>}
      </PressableLink>
    </LinkWrapper>
  )
}