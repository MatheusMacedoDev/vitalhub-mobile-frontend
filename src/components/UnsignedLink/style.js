import styled from 'styled-components/native';

export const LinkWrapper = styled.View`
    flex-direction: row;
    width: 90%;
    gap: 5px;
    justify-content: ${props => props.$isCenter ? 'center' : 'flex-start'};
`;

export const PressableLink = styled.TouchableOpacity`
`;

export const LinkText = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
`;

export const BlueLink = styled(LinkText)`
    color: #4D659D;
    text-decoration: underline;
`;

export const GreyLink = styled(LinkText)`
    color: #8C8A97;
    margin-top: 10px;
    text-decoration: underline;
`;