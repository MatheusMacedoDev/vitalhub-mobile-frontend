import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackNavigationScreen from './src/screens/StackNavigationScreen/StackNavigationScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}