import React from "react";
import { View } from "react-native";
import { Marker } from "react-native-maps";

const LocationContainer = ({ locations }) => {
  return (
    <>
      {locations.map((location) => {
        return (
          <Marker
            key={location.id}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            pinColor="red"
          />
        );
      })}
    </>
  );
};

export default LocationContainer;
