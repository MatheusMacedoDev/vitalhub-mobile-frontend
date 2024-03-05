import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DoctorConsultScreen from '../DoctorConsultScreen';
import PatientProfileScreen from '../PatientProfileScreen';

import { FontAwesome } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName='DoctorConsult'
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#fff', height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: 'transparent',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if( route.name === "DoctorConsult" ) {
                        return ()
                    } else {

                    }
                }
            })}
        >
            <BottomTab.Screen 
                name='DoctorConsult'
                component={DoctorConsultScreen}
                options={{headerShown: false}}
            />
            <BottomTab.Screen 
                name='PatientProfile'
                component={PatientProfileScreen}
                options={{headerShown: false}}
            />
        </BottomTab.Navigator>
    );
}