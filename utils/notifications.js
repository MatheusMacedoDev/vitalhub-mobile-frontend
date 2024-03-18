import * as Notifications from 'expo-notifications';

export const PatientCancelNotify = async (patientName, consultationSpecialty, consultationDate, consultationTime) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Consulta Cancelada',
            body: `O paciente ${patientName} cancelou a consulta de ${consultationSpecialty}, do dia ${consultationDate} às ${consultationTime}.`
        },
        trigger: null
    });
}

export const DoctorCancelNotify = async (doctorName, consultationSpecialty, consultationDate, consultationTime) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Consulta Cancelada',
            body: `O ${doctorName} cancelou a consulta de ${consultationSpecialty}, do dia ${consultationDate} às ${consultationTime}.`
        },
        trigger: null
    });
}