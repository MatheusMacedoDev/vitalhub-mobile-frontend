import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
    width: 100%;
    background-color: #fff;
    padding: 12px 20px 12px 12px;
    flex-direction: row;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    elevation: 10;
    position: relative;
`;

export const CardImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 5px;
`;

export const CardInfoContainer = styled.View`
    width: 43%;
    justify-content: space-between;
`;

export const PatientNameText = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 18px;
`;

export const SubtitleInfoWrapper = styled.View`
    flex-direction: row;
    gap: 10px;
    align-items: center;
    margin-top: -5px;
`;

export const PatientAgeText = styled.Text`
    font-family: 'Quicksand_400Regular';
    font-size: 14px;
    color: #8C8A97;
`;

export const ConsultationTypeText = styled(PatientAgeText)`
    font-family: 'Quicksand_600SemiBold';
`;

export const TimeContainer = styled.View`
    background-color: #E8FCFD;
    flex-direction: row;
    width: 70%;
    padding: 4px 23px; 
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;

export const GreyTimeContainer = styled(TimeContainer)`
    background-color: #F1F0F5;
`;

export const TimeText = styled(ConsultationTypeText)`
    color: #49B3BA;
`;

export const GreyTimeText = styled(TimeText)`
    color: #4E4B59;
`;

export const CancelationLink = styled.Text`
    color: #C81D25;
    position: absolute;
    bottom: 12px;
    right: 12px;
`;

export const MedicalRecordLink = styled(CancelationLink)`
    color: #344F8F;
`;