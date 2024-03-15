import styled from 'styled-components/native';

export const ModalContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
`;

export const PhotoImage = styled.Image`
    width: 100%;
    height: 80%;
    border-radius: 15px;
`;

export const PhotoButtonsWraper = styled.View`
    flex-direction: row;
    margin: 15px;
    gap: 30px;
`;

export const PhotoButton = styled.TouchableOpacity`
    padding: 20px;
    border-radius: 15px;
    background-color: #121212;
    align-items: center;
    justify-content: center;
`;