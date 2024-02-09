import { CodeField } from 'react-native-confirmation-code-field';
import styled from 'styled-components/native';

export const CellWrapper = styled.View`
    gap: 20px;
    margin-bottom: 4%;
`;

export const Cell = styled.Text`
    width: 64px;
    height: 62px;
    line-height: 50px;
    border-width: 2px;
    border: 2px solid #77CACF;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    font-family: 'Quicksand_600SemiBold';
    font-size: 34px;
    color: #34898F;
    text-align: center;
`;