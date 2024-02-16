import { View, Text, Button } from 'react-native'
import React from 'react'

export default function StackNavigationScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
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
        </View>
    )
}
