import React from 'react'
import { BarContainer } from './style'
import ConsultationButton from '../ConsultationButton'

export default function ConsultationBar({ selectedType = 0, changeSelectedType = null }) {
    return (
        <BarContainer>
            <ConsultationButton 
                text='Agendadas'
                buttonTypeState={0}
                currentTypeState={selectedType}
                changeButtonState={changeSelectedType}
                
            />
            <ConsultationButton 
                text='Realizadas'
                buttonTypeState={1}
                currentTypeState={selectedType}
                changeButtonState={changeSelectedType}
            />
            <ConsultationButton 
                text='Canceladas'
                buttonTypeState={2}
                currentTypeState={selectedType}
                changeButtonState={changeSelectedType}
            />
        </BarContainer>
    )
}