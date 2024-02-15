import React from 'react';

import { Input, InputContainer, InputText } from './style'

export default function InternalInput({ inputText = 'Input', placeholder = 'Default placeholder' }) {
    return (
        <InputContainer>
            <InputText>{ inputText }</InputText>
            <Input placeholder={placeholder}/>
        </InputContainer>
    )
}