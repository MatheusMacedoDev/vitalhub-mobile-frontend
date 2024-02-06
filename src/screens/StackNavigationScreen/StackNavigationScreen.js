import { View, Text, Button } from 'react-native'
import React from 'react'

export default function StackNavigationScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button 
                title='Login'
                onPress={() => navigation.navigate("login")}
            />
        </View>
    )
}