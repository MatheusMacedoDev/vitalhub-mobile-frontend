import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Header = styled(LinearGradient)`
    background-color: #60BFC5;
    height: 18%;
    border-radius: 0 0 15px 15px;
    padding: 30px 22px 0px 22px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 1
})`
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

export const UserImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 5px;
`;

export const UserInfoContainer = styled.View`

`;

export const WelcomeText = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_500Medium';
    color: #4E4B59;
`;

export const NameText = styled.Text`
    font-size: 16px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #FBFBFB;
`;