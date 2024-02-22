import styled from 'styled-components/native';

export const ButtonsWrapper = styled.View`
    flex-direction: row;
`;

export const Button = styled.TouchableHighlight`
    border-radius: 10px;
    border: 2px solid #60BFC5;
    background-color: ${props => props.active ? '#60BFC5' : 'transparent'};
`;

export const ButtonText = styled.Text`
    font-size: 14px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: ${props => props.active ? '#FBFBFB' : '#34898F' };
    padding: 10px;
`;