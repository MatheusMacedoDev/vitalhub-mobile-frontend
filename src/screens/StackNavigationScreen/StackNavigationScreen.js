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
        </View>
    )
}