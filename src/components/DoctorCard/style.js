import styled from 'styled-components/native';

export const CardsList = styled.FlatList`
    margin: 20px 0;
    width: 100%;
`;

export const CardContainer = styled.View`
    padding: 10px;
    flex-direction: row;
    background-color: white;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
    elevation: 20;
    border-radius: 10px;
    align-items: center;
    gap: 10px;
    border: ${props => props.isSelected ? '2px solid #496BBA' : 'none'};
`;

export const DoctorImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 8px;
`;

export const InfoTextWrapper = styled.View`

`;

export const DoctorNameText = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
`;

export const DoctorSpecialtiesText = styled.Text`
    color: #8C8A97;
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
`;