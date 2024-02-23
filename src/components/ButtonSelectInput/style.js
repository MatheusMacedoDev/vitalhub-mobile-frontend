import styled from 'styled-components/native';

export const ButtonsWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.TouchableHighlight`
    width: 30%;
    border-radius: 10px;
    border: 2px solid #60BFC5;
    background-color: ${props => props.active ? '#60BFC5' : 'transparent'};
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 14px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: ${props => props.active ? '#FFFFFF' : '#34898F' };
`;