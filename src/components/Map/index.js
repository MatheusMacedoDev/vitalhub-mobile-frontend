import React, { useState } from 'react'
import MapView from 'react-native-maps'

export default function Map() {
  const [region, setRegion] = useState({
    latitude: -23.602021,
    longitude: -46.672103,
    latitudeDelta: 0,
    longitudeDelta: 0
  })

  return (
    <MapView 
        style={{ width: '100%', height: '55%' }}
        mapType='mutedStandard'
        initialRegion={region}
    />
  )
}