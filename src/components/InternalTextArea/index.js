import React from 'react';

import { TextArea } from './style'
import { InputContainer, InputText } from '../InternalInput/style'

export default function InternalTextArea({ inputText = 'Input', textArea = 'Text' }) {
    return (
        <InputContainer>
            <InputText fontSize={14}>{ inputText }</InputText>
            <TextArea>
                { textArea }
            </TextArea>
        </InputContainer>
    )
}