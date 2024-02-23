import React from 'react';

import { Input, InputContainer, InputText } from './style'

export default function InternalInput({ inputText = 'Input', inputTextFontSize = 16, placeholder = 'Default placeholder' }) {
    return (
        <InputContainer>
            <InputText fontSize={inputTextFontSize}>{ inputText }</InputText>
            <Input placeholder={placeholder}/>
        </InputContainer>
    )
}