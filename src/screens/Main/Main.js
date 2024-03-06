import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DoctorConsultScreen from '../DoctorConsultScreen';
import PatientConsultScreen from '../PatientConsultScreen';
import PatientProfileScreen from '../PatientProfileScreen';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { ContentIcon, TextIcon } from './style';

import { Host } from 'react-native-portalize'

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <Host>
            <BottomTab.Navigator
                initialRouteName='DoctorConsult'
                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: '#fff', height: 80, paddingTop: 10 },
                    tabBarActiveBackgroundColor: 'transparent',
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        const getBackgroundColor = () => focused ? '#ECF2FF' : 'transparent';

                        if( route.name === "DoctorConsult" ) {
                            return (
                                <ContentIcon
                                    tabBarActiveBackgroundColor={ getBackgroundColor() }
                                >
                                    <FontAwesome name='calendar' size={18} color='#4E4B59' />
                                    { focused && <TextIcon>Agenda</TextIcon> }
                                </ContentIcon>
                            )
                        } else {
                            return (
                                <ContentIcon
                                    tabBarActiveBackgroundColor={ getBackgroundColor() }
                                >
                                    <FontAwesome5 name='user-circle' size={18} color='#4E4B59' />
                                    { focused && <TextIcon>Perfil</TextIcon> }
                                </ContentIcon>
                            )
                        }
                    }
                })}
            >
                <BottomTab.Screen 
                    name='DoctorConsult'
                    component={DoctorConsultScreen}
                />
                <BottomTab.Screen 
                    name='PatientProfile'
                    component={PatientProfileScreen}
                />
            </BottomTab.Navigator>
        </Host>
    );
}