import styled from 'styled-components/native';

export const CardsList = styled.FlatList`
    margin: 20px 0;
    width: 100%;
`;

export const CardContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 84px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
    elevation: 20;
    background-color: white;
    border-radius: 10px;
    padding: 18px 18px 10px 18px;
    justify-content: space-between;
    border: ${props => props.isSelected ? '2px solid #496BBA' : 'none'};
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