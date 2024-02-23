import { View, Text } from 'react-native'
import React from 'react'
import { Button, ButtonText, ButtonsWrapper } from './style'
import InputLabel from '../InputLabel/style'

export default function ButtonSelectInput({ selectedButtonId, handleChangeSelectedFn = null }) {
  return (
    <View>
        <InputLabel>Qual o nível da consulta</InputLabel>
        <ButtonsWrapper>
            <ButtonSelect 
                active={selectedButtonId == 1}
                buttonText='Rotina'
                buttonId={1}
                handleClickFn={handleChangeSelectedFn}
            />
            <ButtonSelect 
                active={selectedButtonId == 2}
                buttonText='Exame'
                buttonId={2}
                handleClickFn={handleChangeSelectedFn}
            />
            <ButtonSelect 
                active={selectedButtonId == 3}
                buttonText='Urgência'
                buttonId={3}
                handleClickFn={handleChangeSelectedFn}
            />
        </ButtonsWrapper>
    </View>
  )
}

function ButtonSelect({ buttonText = '', buttonId, handleClickFn = null, active = false }) {
    return (
        <Button active={active} onPress={() => handleClickFn(buttonId)}>
            <ButtonText active={active}>{ buttonText }</ButtonText>
        </Button>
    );
}