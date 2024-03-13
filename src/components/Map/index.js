import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Alert, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { MapContainer } from './style';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy } from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { mapskey } from '../../../utils/mapsApiKey';

export default function Map() {
  const mapReference = useRef(null)

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
      const findedPosition = await getCurrentPositionAsync();
      setInitialPosition(findedPosition.coords);
    }
  }

  function setMapToViewPosition() {
    if (mapReference.current && initialPosition) {
      mapReference.current.fitToCoordinates(
        [
          { latitude: initialPosition.latitude, longitude: initialPosition.longitude },
          { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
        ],
        {
          edgePadding: { top: 60, left: 60, right: 60, bottom: 60 },
          animated: true
        }
      )
    }
  }

  useEffect(() => {
    getInitialPosition();

    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, response => {
      setInitialPosition(response.coords);
      mapReference?.current.animateCamera({
        pitch: 60,
        center: response.coords
      })
    })
  }, [1000]);

  useEffect(() => {
    setMapToViewPosition();
  }, [initialPosition])

  return (
    <MapContainer>
      {
        initialPosition ? (
          <MapView 
            style={{ width: '100%', flex: 1 }}
            mapType='mutedStandard'
            initialRegion={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
              latitudeDelta: 0,
              longitudeDelta: 0
            }}
            provider={PROVIDER_GOOGLE}
            ref={mapReference}
          >
            <Marker 
              coordinate={initialPosition}
              title='Origem'
              description='Local de origem'
            />
            <MapViewDirections 
              origin={initialPosition}
              destination={finalPosition}
              apikey={mapskey}
              strokeWidth={5}
              strokeColor='blue'
            />
            <Marker 
              coordinate={finalPosition}
              title='Destino'
              description='Local de destino'
              pinColor='blue'
            />
          </MapView>
        ) : (
          <ActivityIndicator />
        )
      }
    </MapContainer>
  )
}