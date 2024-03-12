import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { MapContainer } from './style';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

export default function Map() {
  const [initialPosition, setInitialPosition] = useState(null);
  const [finalPosition, setFinalPosition] = useState({
    latitude: -23.6020,
    longitude: -46.6721,
    latitudeDelta: 0,
    longitudeDelta: 0
  })

  async function getInitialPosition() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const findedPosition = (await getCurrentPositionAsync()).coords;
      setInitialPosition(findedPosition);
    }
  }

  useEffect(() => {
    getInitialPosition();
  }, [1000]);

  return (
    <MapContainer>
      {
        initialPosition ? (
          <MapView 
            mapType='mutedStandard'
            initialRegion={initialPosition}
            provider={PROVIDER_GOOGLE}
          />
        ) : (
          <ActivityIndicator />
        )
      }
    </MapContainer>
  )
}