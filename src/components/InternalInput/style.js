import styled from 'styled-components/native';

export const InternalInputsWrapper = styled.View`
    gap: 20px;
    width: 100%;
    margin: 20px 0;
`;

export const InputContainer = styled.View`
    width: ${props => props.widthPercentage ? props.widthPercentage : '100'}%;
    gap: 10px;
`;

export const InputText = styled.Text`
    font-size: ${props => props.fontSize}px;
    font-family: 'Quicksand_600SemiBold';
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#34898F'
})`
    font-size: 14px;
    text-align-vertical: ${props => props.numberOfLines === 1 ? 'center' : 'top'};
    font-family: 'MontserratAlternates_600SemiBold';
    border: 2px solid #49B3BA;
    border-radius: 10px;
    padding: 20px;
`;