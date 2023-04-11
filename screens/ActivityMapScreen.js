import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import MapView, { Marker, Circle, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet } from "react-native";
import {
  ChatBubbleLeftIcon,
  HandThumbUpIcon,
  MapPinIcon,
  ShareIcon,
} from "react-native-heroicons/solid";

function generateRandomCoordinates(center, radius) {
  const y0 = center.latitude;
  const x0 = center.longitude;
  const rd = radius / 111300; // convert radius to degrees

  const u = Math.random();
  const v = Math.random();
  const w = rd * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  const newLatitude = y + y0;
  const newLongitude = x + x0;

  return {
    latitude: newLatitude,
    longitude: newLongitude,
  };
}

const CustomCallout = ({ title, description }) => {
  return (
    <View style={styles.calloutContainer}>
      <Text style={styles.calloutTitle}>{title}</Text>
      <Text style={styles.calloutDescription}>{description}</Text>
    </View>
  );
};

const SharedPostPane = () => {
  return (
    <View
      className="flex flex-col bg-blue-200 rounded-xl mt-10"
      style={{ height: 400 }}
    >
      <Text className="text-3xl pl-2">SHARED POST</Text>

      {/* image */}
      <View className="bg-red-500 h-" style={{ height: "50%" }}></View>

      {/* content below image */}
      <View className="flex flex-col flex-1">
        {/* type and distance */}
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Text>Collision</Text>
          </View>

          <View className="flex flex-row items-center">
            <MapPinIcon color="rgb(246,246,246)" />
            <Text>1.1 miles away</Text>
          </View>
        </View>

        <Text className="font-bold">No traction on icy Trinity Road</Text>

        <Text numberOfLines={undefined} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          sagittis dolor. Aliquam arcu...
        </Text>

        <View className="flex flex-row flex-1">
          <HandThumbUpIcon />
          <ChatBubbleLeftIcon />
          <ShareIcon />
        </View>
      </View>
    </View>
  );
};

export default function ActivityMapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const RADIUS = 600;
  const RandomMarkers = [];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log(currentLocation);

      for (let i = 0; i < 3; ++i) {
        RandomMarkers.push(
          generateRandomCoordinates(currentLocation.coords, RADIUS)
        );
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        style={styles.map}
        initialRegion={{
          latitude: location ? location.coords.latitude : 37.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: location ? location.coords.latitude - 0.005 : 37.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.012,
          longitudeDelta: 0.02,
        }}
      >
        {location && (
          <Marker coordinate={location.coords}>
            <Callout tooltip onPress={() => alert("Marker clicked")}>
              <CustomCallout
                title={"testingtitle"}
                description={"testingdesc"}
              />
            </Callout>
          </Marker>
        )}
        {location && (
          <Circle
            center={location.coords}
            radius={RADIUS} // change this value as per your requirements
            fillColor="rgba(255, 0, 0, 0.1)" // change this value to adjust the circle fill color
            strokeColor="rgba(255, 0, 0, 0.3)" // change this value to adjust the circle stroke color
          />
        )}

        {location && (
          <Marker coordinate={generateRandomCoordinates(location.coords, 600)}>
            {RandomMarkers}
          </Marker>
        )}
      </MapView>
      <SharedPostPane />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
