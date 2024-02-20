import { StyleSheet } from 'react-native'
import React from 'react'
import moment from 'moment';
import { StyledCalendar } from './style'
import { MontserratAlternates_600SemiBold, useFonts } from '@expo-google-fonts/montserrat-alternates';

export default function Calendar() {
    useFonts({ MontserratAlternates_600SemiBold });

    moment.updateLocale("pt-br", {
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthsShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
        weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    });

    const currentDate = new Date();
    const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        
    return (
        <StyledCalendar 
            calendarAnimation={{ type: 'sequence', duration: 20 }}
            daySelectionAnimation={styles.selectedAnimation}

            iconLeftStyle={styles.icons}
            iconRight={styles.icons}

            selectedDate={currentDate}
            startingDate={moment()}

            minDate={startingDate}
            maxDate={endDate}

            calendarHeaderStyle={styles.calendarHeader}
            dateNameStyle={styles.dateName}
            dateNumberStyle={styles.dateNumber}

            highlightDateContainerStyle={styles.selectedDateContainer}
            highlightDateNameStyle={styles.selectedDateName}
            highlightDateNumberStyle={styles.selectedNumber}

            iconContainer={{ flex: 0.1 }}

            scrollable={true}
        />
    )
}

const styles = StyleSheet.create({
    icons: {
        display: 'none'
    },
    calendarHeader: {
        fontSize: 22,
        textAlign: 'center',
        alignSelf: 'flex-start',
        color: '#4E4B59',
        fontFamily: "MontserratAlternates_600SemiBold",
        paddingHorizontal: 16
    },
    dateName: {
        color: "#ACABB7",
        fontSize: 14
    },
    dateNumber: {
        color: "#5F5C6B",
        fontSize: 16
    },
    selectedDateContainer: {
        backgroundColor: '#60BFC5'
    },
    selectedDateName: {
        color: '#FBFBFB',
        fontSize: 12,
        fontWeight: 'bold'
    },
    selectedNumber: {
        color: '#FBFBFB',
        fontSize: 14
    },
    selectedAnimation: {
        type: 'border',
        duration: 200,
        borderWidth: 2,
        borderHighlightColor: '#49B3BA'
    }
})