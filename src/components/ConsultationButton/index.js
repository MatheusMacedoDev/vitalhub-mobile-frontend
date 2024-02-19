import React, { useState } from 'react'
import { BarButton, BarButtonText, HighlightedBarButton, HighlightedBarButtonText } from './style'

export default function ConsultationButton({ buttonTypeState, currentTypeState, text = '', changeButtonState = null }) {
    if (buttonTypeState == currentTypeState) {
        return (
            <HighlightedBarButton>
                <HighlightedBarButtonText>{ text }</HighlightedBarButtonText>
            </HighlightedBarButton>
        )
    }

    return (
        <BarButton onPress={ () => changeButtonState(buttonTypeState) }>
            <BarButtonText>{ text }</BarButtonText>
        </BarButton>
    )
}