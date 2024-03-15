import styled from 'styled-components/native';

export const MedicalExamsContainer = styled.View`
    width: 100%;
    margin-bottom: 20px;
`;

export const ExamPhotosContainer = styled.View`
    background-color: #F5F3F3;
    width: 100%;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    flex-direction: row;
    gap: 10px;
`;

export const ExamPhoto = styled.Image`
    width: 20%;
    height: 80%;
    border-radius: 10px;
`;

export const NoPhotoText = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size: 14px;
`;

export const ButtonsWrapper = styled.View`
    margin-top: 4%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SendButtonContainer = styled.TouchableOpacity`
    background-color: #49B3BA;
    width: 50%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    flex-direction: row;
    gap: 10px;
`;

export const SendButtonText = styled.Text`
    color: #FFFFFF;
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14px;
`;

export const CancelationContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 45%;
`;

export const CancelationLink = styled.Text`
    color: #C81D25;
    font-size: 13px;
    font-family: 'MontserratAlternates_500Medium';
`;

export const Line = styled.View`
    width: 100%;
    border-bottom-width: 2px;
    border-color: #8C8A97;
    margin: 20px 0;
`;