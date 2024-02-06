import styled from 'styled-components/native';

export const BasicInput = styled.TextInput.attrs({
    placeholderTextColor: '#34898F'
})`
    border-radius: 10px;
    border: 2px solid #49B3BA;
    width: 90%;
    padding: 16px;

    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #34898F;
`;

export const BasicInputWrapper = styled.View`
    width: 100%;
    gap: 15px;
    align-items: center;
`;