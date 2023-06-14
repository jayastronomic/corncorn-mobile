import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import LocationContainer from "../components/LocationContainer";
import { getAllLocations } from "../network/locations";
const Home = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getAllLocations();
      setLocations(locations);
    };
    fetchLocations();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.8781,
          longitude: -87.623177,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <LocationContainer locations={locations} />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Home;
