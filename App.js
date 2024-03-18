import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackNavigationScreen from './src/screens/StackNavigationScreen/StackNavigationScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

import {
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    useFonts
} from '@expo-google-fonts/montserrat-alternates';

import {
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold
} from '@expo-google-fonts/quicksand'

import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import RecoverPasswordScreen from './src/screens/RecoverPasswordScreen';
import RedefinePasswordScreen from './src/screens/RedefinePasswordScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import EmailCodeScreen from './src/screens/EmailCodeScreen';
import InsertMedicalRecordScreen from './src/screens/InsertMedicalRecordScreen';
import PatientProfileScreen from './src/screens/PatientProfileScreen';
import DoctorConsultScreen from './src/screens/DoctorConsultScreen';
import PatientConsultScreen from './src/screens/PatientConsultScreen';
import ClinicSelectionScreen from './src/screens/ClinicSelectionScreen';
import DoctorSelectionScreen from './src/screens/DoctorSelectionScreen';
import DateSelectionScreen from './src/screens/DateSelectionScreen';
import ConsultationLocationScreen from './src/screens/ConsultationLocationScreen';
import PatientViewMedicalRecord from './src/screens/PatientViewMedicalRecord';
import { Main } from './src/screens/Main/Main';
import CameraScreen from './src/screens/CameraScreen';

import * as Notifications from 'expo-notifications';

const Stack = createNativeStackNavigator();

Notifications.requestPermissionsAsync();
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true
    })
})

export default function App() {
    useFonts({
        MontserratAlternates_500Medium,
        MontserratAlternates_600SemiBold,
        MontserratAlternates_700Bold,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold
    });

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false
                })}
            >
                <Stack.Screen
                    name='login'
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen 
                    name='Main'
                    component={Main}
                />
                <Stack.Screen
                    name='splashScreen'
                    component={SplashScreen}
                    options={{ title: 'Splash Screen' }}
                />
                <Stack.Screen
                    name='recoverPassword'
                    component={RecoverPasswordScreen}
                    options={{ title: 'Recover Password' }}
                />
                <Stack.Screen
                    name='redefinePassword'
                    component={RedefinePasswordScreen}
                    options={{ title: 'Redefine Password' }}
                />
                <Stack.Screen
                    name='createAccount'
                    component={CreateAccountScreen}
                    options={{ title: 'Create Account' }}
                />
                <Stack.Screen
                    name='emailCode'
                    component={EmailCodeScreen}
                    options={{ title: 'Email Code' }}
                />
                <Stack.Screen
                    name='insertMedicalRecord'
                    component={InsertMedicalRecordScreen}
                    options={{ title: 'InsertMedicalRecord' }}
                />
                <Stack.Screen
                    name='patientProfile'
                    component={PatientProfileScreen}
                    options={{ title: 'PatientProfile' }}
                />
                <Stack.Screen
                    name='doctorConsult'
                    component={DoctorConsultScreen}
                    options={{ title: 'DoctorConsult' }}
                />
                <Stack.Screen
                    name='patientConsult'
                    component={PatientConsultScreen}
                    options={{ title: 'PatientConsult' }}
                />
                <Stack.Screen
                    name='clinicSelection'
                    component={ClinicSelectionScreen}
                    options={{ title: 'ClinicSelection' }}
                />
                <Stack.Screen
                    name='doctorSelection'
                    component={DoctorSelectionScreen}
                    options={{ title: 'DoctorSelection' }}
                />
                <Stack.Screen
                    name='dateSelection'
                    component={DateSelectionScreen}
                    options={{ title: 'DateSelection' }}
                />
                <Stack.Screen
                    name='consultationLocation'
                    component={ConsultationLocationScreen}
                    options={{ title: 'ConsultationLocation' }}
                />
                <Stack.Screen
                    name='patientViewMedicalRecord'
                    component={PatientViewMedicalRecord}
                    options={{ title: 'PatientViewMedicalRecord' }}
                    initialParams={{ newPhotoUri: '' }}
                />
                <Stack.Screen
                    name='Camera'
                    component={CameraScreen}
                    options={{ title: 'Camera' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
