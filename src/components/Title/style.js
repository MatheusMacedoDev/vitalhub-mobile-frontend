import styled from 'styled-components/native';

export const BigGroup = styled.View`
    width: 100%;
    gap: 4px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #33303E;
    margin: ${props => props.$marginTop || 20}px 0;
    width: 100%;
    text-align: center;
`;

export const Subtitle = styled.Text`
    font-size: 16px;
    font-family: 'Quicksand_500Medium';
    text-align: center;
`;

export const SecondSubtitle = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_600SemiBold';
    text-align: center;
`;

export const SmallGroup = styled.View`
    gap: 8px;
    width: 100%;
`;

export const SmallTitle = styled(Title)`
    font-size: 16px;
    font-family: 'Quicksand_600SemiBold';
    text-align: left;
    margin: 0;
`;

export const SmallSubtitle = styled(Subtitle)`
    font-size: 14px;
    text-align: left;
`;