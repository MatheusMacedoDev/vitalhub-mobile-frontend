import styled from 'styled-components/native';
import { CardContainer } from '../Card/style';

export const DoctorCardContainer = styled(CardContainer)`
    gap: 10px;
    padding: 0;
    justify-content: start;
    align-items: center;
`;

export const CardTextInfo = styled.View`

`;

export const CardAdditionalInfo = styled.View`
    justify-content: space-between;
`;

export const ClinicNameText = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
    color: #33303E;
`;

export const ClinicLocationText = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
    color: #4E4B59;
`;

export const StarContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 3px;
`;

export const StarText = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
    color: #F9A620;
`;

export const OpenedDaysContainer = styled.View`
    flex-direction: row;
    gap: 5px;
    align-items: center;
    background-color: #E8FCFD;
    padding: 4px 14px 4px 14px;
    border-radius: 5px;
`;

export const OpenedDaysText = styled.Text`
    font-family: 'Quicksand_600SemiBold';
    font-size: 14px;
    color: #49B3BA;
`;