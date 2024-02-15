import React from 'react';

import { TextArea } from './style'
import { InputContainer, InputText } from '../InternalInput/style'

export default function InternalTextArea({ inputText = 'Input', textArea = 'Text' }) {
    return (
        <InputContainer>
            <InputText>{ inputText }</InputText>
            <TextArea>
                { textArea }
            </TextArea>
        </InputContainer>
    )
}