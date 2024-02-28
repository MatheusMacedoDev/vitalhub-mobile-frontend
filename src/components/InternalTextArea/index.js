import React from 'react';

import { TextArea } from './style'
import { InputContainer, InputText } from '../InternalInput/style'

export default function InternalTextArea({ inputText = '', textArea = 'Text', widthPercentage }) {
    return (
        <InputContainer widthPercentage={widthPercentage}>
            {
                inputText != '' ? <InputText fontSize={16}>{ inputText }</InputText> : null
            
            }
            <TextArea>
                { textArea }
            </TextArea>
        </InputContainer>
    )
}