import { View, Text, Button } from 'react-native'
import React from 'react'

export default function StackNavigationScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Button
                title='Login'
                onPress={() => navigation.navigate("login")}
            />
            <Button
                title='Splash'
                onPress={() => navigation.navigate("splashScreen")}
            />
            <Button
                title='Recover Password'
                onPress={() => navigation.navigate("recoverPassword")}
            />
            <Button
                title='Redefine Password'
                onPress={() => navigation.navigate('redefinePassword')}
            />
            <Button
                title='Create Account'
                onPress={() => navigation.navigate('createAccount')}
            />
            <Button
                title='Email Code'
                onPress={() => navigation.navigate('emailCode')}
            />
            <Button
                title='Insert Medical Record'
                onPress={() => navigation.navigate('insertMedicalRecord')}
            />
            <Button
                title='Patient Profile'
                onPress={() => navigation.navigate('patientProfile')}
            />
            <Button
                title='Doctor Consult'
                onPress={() => navigation.navigate('doctorConsult')}
            />
            <Button
                title='Patient Consult'
                onPress={() => navigation.navigate('patientConsult')}
            />
            <Button
                title='Clinic Selection'
                onPress={() => navigation.navigate('clinicSelection')}
            />
            <Button
                title='DoctorSelection'
                onPress={() => navigation.navigate('doctorSelection')}
            />
            <Button
                title='DateSelection'
                onPress={() => navigation.navigate('dateSelection')}
            />
            <Button
                title='ConsultationLocation'
                onPress={() => navigation.navigate('consultationLocation')}
            />
            <Button
                title='PatientViewMedicalRecord'
                onPress={() => navigation.navigate('patientViewMedicalRecord')}
            />
        </View>
    )
}
