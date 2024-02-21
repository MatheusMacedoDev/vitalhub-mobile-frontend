import React, { useEffect, useState } from 'react'
import HomeHeader from '../../components/HomeHeader'
import { ScreenContainer } from '../../components/ScreenContainer/style'
import Calendar from '../../components/Calendar'
import ConsultationBar from '../../components/ConsultationBar'
import { Container } from '../../components/Container/style';
import ConsultationCard from '../../components/ConsultationCard'
import { ConsultationCarList } from '../../components/ConsultationCardList/style'
import CancelConsultationModal from '../../components/CancelConsultationModal'
import InsertMedicalRecordModal from '../../components/InsertMedicalRecordModal'

export default function DoctorConsultScreen() {
  const [isCancelConsultationModalActive, setIsCancelConsultationModalActive] = useState(false);

  const [isInsertMedicalRecordModalActive, setIsInsertMedicalRecordModalActive] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState({})

  const [selectedConsultationType, setSelectedConsultationType] = useState(0);
  const [selectedConsultationData, setSelectedConsultationData] = useState([]);
  const [consultationsData, setConsultationData] = useState([
    {
      consultationId: 1,
      patientName: 'Niccole Sarga',
      patientEmail: 'niccole.sarga@email.com',
      patientAge: '22 anos',
      consultationType: 'Rotina',
      consultationTime: '14:00',
      consultationStatus: 'scheduled'
    },
    {
      consultationId: 2,
      patientName: 'Richard Kosta',
      patientEmail: 'richard.kosta@email.com',
      patientAge: '28 anos',
      consultationType: 'Urgência',
      consultationTime: '15:00',
      consultationStatus: 'scheduled'
    },
    {
      consultationId: 3,
      patientName: 'Elisa',
      patientEmail: 'elisa@email.com',
      patientAge: '22 anos',
      consultationType: 'Rotina',
      consultationTime: '16:00',
      consultationStatus: 'performed'
    },
    {
      consultationId: 4,
      patientName: 'Elisangela',
      patientEmail: 'elisangela@email.com',
      patientAge: '28 anos',
      consultationType: 'Urgência',
      consultationTime: '15:00',
      consultationStatus: 'performed'
    },
    {
      consultationId: 5,
      patientName: 'Sandra',
      patientEmail: 'sandra@email.com',
      patientAge: '28 anos',
      consultationType: 'Urgência',
      consultationTime: '15:00',
      consultationStatus: 'canceled'
    },
  ]);

  const isScheduledConsultation = consultation => consultation.consultationStatus == 'scheduled';
  const isPerformedConsultation = consultation => consultation.consultationStatus == 'performed';
  const isCanceledConsultation = consultation => consultation.consultationStatus == 'canceled';

  function filterConsultationsByStatus() {
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
      <InsertMedicalRecordModal 
        active={isInsertMedicalRecordModalActive} 
        disableModalFn={() => setIsInsertMedicalRecordModalActive(false)} 
        userData={selectedUserData}
      />
      <ScreenContainer>
          <HomeHeader />
          <Calendar />
          <Container>
            <ConsultationBar
              selectedType={ selectedConsultationType }
              changeSelectedType={ setSelectedConsultationType }
            />
            <ConsultationCarList 
              data={selectedConsultationData}
              contentContainerStyle={{ gap: 12 }}
              keyExtractor={item => item.consultationId}
              renderItem={({ item }) => 
                <ConsultationCard 
                  patientName={item.patientName}
                  patientAge={item.patientAge}
                  patientEmail={item.patientEmail}
                  consultationType={item.consultationType}
                  consultationTime={item.consultationTime}
                  cardType={item.consultationStatus}
                  activeCancelingModalFn={() => setIsCancelConsultationModalActive(true)}
                  activeInserMedicalRecordModalFn={() => setIsInsertMedicalRecordModalActive(true)}
                  setCurrentUserDataFn={setSelectedUserData}
                />
              }
            />
          </Container>
      </ScreenContainer>
    </>
  )
}