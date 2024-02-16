import React from 'react'
import { BarButton, BarButtonText, HighlightedBarButton, HighlightedBarButtonText } from './style'

export default function ConsultationButton({ text, isHighlighted }) {
    if (isHighlighted) {
        return (
            <HighlightedBarButton>
                <HighlightedBarButtonText>{ text }</HighlightedBarButtonText>
            </HighlightedBarButton>
        )
    }

    return (
        <BarButton>
            <BarButtonText>{ text }</BarButtonText>
        </BarButton>
    )
}