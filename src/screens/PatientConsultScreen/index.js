import React, { useEffect, useState } from 'react';
import { ScreenContainer } from '../../components/ScreenContainer/style';
import HomeHeader from '../../components/HomeHeader';
import Calendar from '../../components/Calendar';
import { Container } from '../../components/Container/style';
import ConsultationBar from '../../components/ConsultationBar';
import { ConsultationCarList } from '../../components/ConsultationCardList/style';
import ConsultationCard from '../../components/ConsultationCard';
import CancelConsultationModal from '../../components/CancelConsultationModal';
import { ScheduleConsultationButton } from './style';
import { FontAwesome6 } from '@expo/vector-icons';
import ScheduleConsultationModal from '../../components/ScheduleConsultationModal';

export default function PatientConsultScreen() {
  const [isCancelConsultationModalActive, setIsCancelConsultationModalActive] = useState(false);

  const [isSchedulingConsultationActive, setIsSchedulingConsultationActive] = useState(false);

  const [isInsertMedicalRecordModalActive, setIsInsertMedicalRecordModalActive] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState({})

  const [selectedConsultationType, setSelectedConsultationType] = useState(0);
  const [selectedConsultationData, setSelectedConsultationData] = useState([]);
  const [consultationsData, setConsultationData] = useState([
    {
      consultationId: 1,
      doctorName: 'Dr. Lucas',
      doctorEmail: 'doctor.lucas@email.com',
      doctorAge: '22 anos',
      consultationType: 'Rotina',
      consultationTime: '14:00',
      consultationStatus: 'scheduled'
    }
  ]);

  function filterConsultationsByStatus() {
    const isScheduledConsultation = consultation => consultation.consultationStatus == 'scheduled';
    const isPerformedConsultation = consultation => consultation.consultationStatus == 'performed';
    const isCanceledConsultation = consultation => consultation.consultationStatus == 'canceled';

    switch(selectedConsultationType) {
      case 0:
        const scheduledConsultations = consultationsData.filter(isScheduledConsultation);
        setSelectedConsultationData(scheduledConsultations);
        break;
      case 1:
        const performedConsultations = consultationsData.filter(isPerformedConsultation);
        setSelectedConsultationData(performedConsultations);
        break;
      case 2:
        const canceledConsultations = consultationsData.filter(isCanceledConsultation);
        setSelectedConsultationData(canceledConsultations);
        break;
      default:
        console.log('Hey programmer, there is no state after 2 or before 0');
    }
  }

  useEffect(() => {
    filterConsultationsByStatus();
  }, [selectedConsultationType]);

  return (
    <>
      <CancelConsultationModal 
        active={isCancelConsultationModalActive} 
        disableModalFn={() => setIsCancelConsultationModalActive(false)}
      />
      <ScheduleConsultationModal 
        active={isSchedulingConsultationActive}
        disableModalFn={() => setIsSchedulingConsultationActive(false)}
      />
      <ScreenContainer>
          <HomeHeader userName='Richard Kosta' userImageUri='https://avatars.githubusercontent.com/u/125266412?v=4' />
          <Calendar />
          <Container>
              <ConsultationBar 
                  selectedType={selectedConsultationType}
                  changeSelectedType={setSelectedConsultationType}
              />
              <ConsultationCarList
                data={selectedConsultationData}
                contentContainerStyle={{ gap: 12 }}
                keyExtractor={item => item.consultationId}
                renderItem={({ item }) => 
                  <ConsultationCard 
                    userName={item.doctorName}
                    userAge={item.doctorAge}
                    userEmail={item.doctorEmail}
                    consultationType={item.consultationType}
                    consultationTime={item.consultationTime}
                    cardType={item.consultationStatus}
                    activeCancelingModalFn={() => setIsCancelConsultationModalActive(true)}
                    activeInserMedicalRecordModalFn={() => setIsInsertMedicalRecordModalActive(true)}
                    setCurrentUserDataFn={setSelectedUserData}
                  />
                }
              />
              <ScheduleConsultationButton onPress={() => setIsSchedulingConsultationActive(true)}>
                <FontAwesome6 name="stethoscope" size={32} color="#FBFBFB" />
              </ScheduleConsultationButton>
          </Container>
      </ScreenContainer>
    </>
  );
}