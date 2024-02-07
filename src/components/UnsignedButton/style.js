import styled from 'styled-components/native';

export const UnsignedButtonsWrapper = styled.View`
    margin: 30px 0;
    width: 90%;
    gap: 15px;
`;

export const ButtonContainer = styled.TouchableOpacity`
    background-color: #496BBA;
    width: 100%;
    height: 50px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 15px;
`;

export const GoogleButtonContainer = styled(ButtonContainer)`
    background-color: none;
    border: 1px solid #496BBA;
`;

export const ButtonText = styled.Text`
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
`;

export const GoogleButtonText = styled(ButtonText)`
    color: #496BBA;
`;

export const GoogleIcon = styled.Image`
    width: 20px;
    height: 20px;
`;