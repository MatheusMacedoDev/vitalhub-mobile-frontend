import styled from 'styled-components/native';

export const Title = styled.Text`
    font-size: 20px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #33303E;
    margin: ${props => props.$marginTop || 20}px 0;
`;