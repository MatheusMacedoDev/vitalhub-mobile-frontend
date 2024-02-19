import styled from 'styled-components/native';

export const BarButton = styled.TouchableOpacity`
    width: 120px;
    height: 45px;
    border-radius: 10px;
    border: 2px solid #496BBA;
    justify-content: center;
    align-items: center;
`;

export const BarButtonText = styled.Text`
    font-size: 12px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #496BBA;
`;

export const HighlightedBarButton = styled(BarButton)`
    background-color: #496BBA;
`;

export const HighlightedBarButtonText = styled(BarButtonText)`
    color: #FBFBFB;
`;
