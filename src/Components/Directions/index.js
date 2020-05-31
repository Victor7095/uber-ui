import React from "react";
import MapViewDirections from "react-native-maps-directions";

export default function Directions({ destination, origin, onReady }) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyD3YE1DM8KXml4lj43-kaHDzbtgIBYrdP4"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}
