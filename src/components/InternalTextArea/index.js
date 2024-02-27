import React from 'react';

import { TextArea } from './style'
import { InputContainer, InputText } from '../InternalInput/style'

export default function InternalTextArea({ inputText = 'Input', textArea = 'Text', widthPercentage }) {
    return (
        <InputContainer widthPercentage={widthPercentage}>
            <InputText fontSize={14}>{ inputText }</InputText>
            <TextArea>
                { textArea }
            </TextArea>
        </InputContainer>
    )
}