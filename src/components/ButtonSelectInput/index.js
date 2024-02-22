import { View, Text } from 'react-native'
import React from 'react'
import { Button, ButtonText, ButtonsWrapper } from './style'

export default function ButtonSelectInput({ data = [], selectedButtonId, handleChangeSelectedFn = null }) {
  return (
    <ButtonsWrapper>
        {
            data.map(item => 
                <ButtonSelect 
                    key={item.id}
                    buttonText={item.value}
                    buttonKey={item.id}
                    handleClickFn={handleChangeSelectedFn}
                    active={item.id = selectedButtonId}
                />
            )
        }
    </ButtonsWrapper>
  )
}

function ButtonSelect({ buttonText = '', buttonKey = '', handleClickFn = null, active = false }) {
    return (
        <Button active={active} onPress={() => handleClickFn(buttonKey)}>
            <ButtonText>{ buttonText }</ButtonText>
        </Button>
    );
}