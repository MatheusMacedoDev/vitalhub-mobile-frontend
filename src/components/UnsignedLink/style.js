import styled from 'styled-components/native';

export const LinkWrapper = styled.View`
    flex-direction: row;
    width: 90%;
`;

export const LinkText = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
`;

export const BlueLink = styled(LinkText)`
    color: blue;
`;

export const GreyLink = styled(LinkText)`
    color: grey;
    margin-top: 10px;
    text-decoration: underline;
`;