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

const Stack = createNativeStackNavigator();

export default function App() {
  useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='navigation'
          component={ StackNavigationScreen }
          options={{ title: 'Navigation' }}
        />
        <Stack.Screen
          name='login'
          component={ LoginScreen }
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name='splashScreen'
          component={ SplashScreen }
          options={{ title: 'Splash Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}