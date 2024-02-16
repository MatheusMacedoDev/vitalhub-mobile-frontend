import React from 'react'
import { BarContainer } from './style'
import ConsultationButton from '../ConsultationButton'

export default function ConsultationBar() {
    return (
        <BarContainer>
            <ConsultationButton 
                text='Agendadas'
                isHighlighted={true}
            />
            <ConsultationBar 
                text='Realizadas'
                isHighlighted={false}
            />
            <ConsultationBar 
                text='Canceladas'
                isHighlighted={false}
            />
        </BarContainer>
    )
}