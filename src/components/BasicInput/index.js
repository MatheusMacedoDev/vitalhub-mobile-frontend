import { View, Text } from 'react-native'
import React from 'react'
import { Input } from './style'

export default function BasicInput({ placeholderText }) {
  return (
    <Input 
        placeholder={placeholderText}
    />
  )
}