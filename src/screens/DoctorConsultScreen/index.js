import React, { useEffect, useState } from 'react'
import HomeHeader from '../../components/HomeHeader'
import { ScreenContainer } from '../../components/ScreenContainer/style'
import Calendar from '../../components/Calendar'
import ConsultationBar from '../../components/ConsultationBar'
import { Container } from '../../components/Container/style';
import ConsultationCard from '../../components/ConsultationCard'
import { ConsultationCarList } from '../../components/ConsultationCardList/style'

export default function DoctorConsultScreen() {
  const [selectedConsultationType, setSelectedConsultationType] = useState(0);
  const [selectedConsultationData, setSelectedConsultationData] = useState([]);
  const [consultationsData, setConsultationData] = useState([
    {
      consultationId: 1,
      patientName: 'Niccole Sarga',
      patientAge: '22 anos',
      consultationType: 'Rotina',
      consultationTime: '14:00',
      consultationStatus: 'scheduled'
    },
    {
      consultationId: 2,
      patientName: 'Richard Kosta',
      patientAge: '28 anos',
      consultationType: 'Urgência',
      consultationTime: '15:00',
      consultationStatus: 'scheduled'
    },
    {
      consultationId: 3,
      patientName: 'Elisa',
      patientAge: '22 anos',
      consultationType: 'Rotina',
      consultationTime: '16:00',
      consultationStatus: 'performed'
    },
    {
      consultationId: 4,
      patientName: 'Elisangela',
      patientAge: '28 anos',
      consultationType: 'Urgência',
      consultationTime: '15:00',
      consultationStatus: 'performed'
    },
    {
      consultationId: 5,
      patientName: 'Sandra',
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
            renderItem={({ item }) => 
              <ConsultationCard 
                patientName={item.patientName}
                patientAge={item.patientAge}
                consultationType={item.consultationType}
                consultationTime={item.consultationTime}
                cardType={item.consultationStatus}
              />
            }
          />
        </Container>
    </ScreenContainer>
  )
}